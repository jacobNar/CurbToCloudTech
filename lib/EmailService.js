import nodemailer from 'nodemailer';
import Imap from 'imap';
import MailComposer from 'nodemailer/lib/mail-composer';

class EmailService {
    constructor() {
        this.smtpHost = process.env.SMTP_HOST;
        this.smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
        this.smtpUser = process.env.SMTP_USER;
        this.smtpPass = process.env.SMTP_PASS;
        this.fromEmail = process.env.FROM_EMAIL || this.smtpUser;
        this.fromName = 'Curb to Cloud Tech';

        this.imapHost = process.env.IMAP_HOST;
        this.imapPort = parseInt(process.env.IMAP_PORT || '993', 10);
        this.imapUser = process.env.IMAP_USER || this.smtpUser;
        this.imapPass = process.env.IMAP_PASS || this.smtpPass;
    }

    async sendEmail({ to, subject, html, text }) {
        const transporter = nodemailer.createTransport({
            host: this.smtpHost,
            port: this.smtpPort,
            secure: this.smtpPort === 465,
            auth: {
                user: this.smtpUser,
                pass: this.smtpPass
            }
        });

        const mailOptions = {
            from: `"${this.fromName}" <${this.fromEmail}>`,
            to,
            subject,
            html,
            text
        };

        const info = await transporter.sendMail(mailOptions);

        if (this.imapHost) {
            this.archiveSentMessage(mailOptions).catch(() => { });
        }

        return info.messageId;
    }

    findSentFolder(boxes, prefix = '') {
        for (const name of Object.keys(boxes)) {
            const box = boxes[name];
            const fullName = prefix ? `${prefix}${box.delimiter || '/'}${name}` : name;
            if (box.attribs && Array.isArray(box.attribs)) {
                if (box.attribs.some(attr => attr.toLowerCase() === '\\sent')) {
                    return fullName;
                }
            }
            const lowerName = name.toLowerCase();
            if (lowerName === 'sent' || lowerName === 'sent items' || lowerName === 'sent mail' || lowerName === 'inbox.sent') {
                return fullName;
            }
            if (box.children) {
                const childResult = this.findSentFolder(box.children, fullName);
                if (childResult) return childResult;
            }
        }
        return null;
    }

    async archiveSentMessage(mailOptions) {
        if (!this.imapHost) return;
        return new Promise((resolve) => {
            const imapConfig = {
                user: this.imapUser,
                password: this.imapPass,
                host: this.imapHost,
                port: this.imapPort,
                tls: true,
                tlsOptions: { rejectUnauthorized: false }
            };
            const imap = new Imap(imapConfig);
            imap.on('ready', () => {
                imap.getBoxes((err, boxes) => {
                    let sentFolder = 'INBOX.Sent';
                    if (!err && boxes) {
                        const found = this.findSentFolder(boxes);
                        if (found) {
                            sentFolder = found;
                        }
                    }
                    imap.openBox(sentFolder, false, (openErr) => {
                        if (openErr) {
                            const fallbacks = ['Sent', 'Sent Items', 'Sent Mail', 'INBOX/Sent'];
                            let fallbackIndex = 0;
                            const tryNextFallback = () => {
                                if (fallbackIndex >= fallbacks.length) {
                                    imap.end();
                                    resolve();
                                    return;
                                }
                                const nextFolder = fallbacks[fallbackIndex++];
                                imap.openBox(nextFolder, false, (fErr) => {
                                    if (fErr) {
                                        tryNextFallback();
                                    } else {
                                        doAppend(nextFolder);
                                    }
                                });
                            };
                            tryNextFallback();
                        } else {
                            doAppend(sentFolder);
                        }
                    });
                });
            });

            const doAppend = (folderName) => {
                const composer = new MailComposer(mailOptions);
                composer.compile().build((buildErr, messageBuffer) => {
                    if (buildErr) {
                        imap.end();
                        resolve();
                        return;
                    }
                    imap.append(messageBuffer, { flags: ['\\Seen'] }, (appendErr) => {
                        imap.end();
                        resolve();
                    });
                });
            };

            imap.on('error', (err) => {
                imap.end();
                resolve();
            });
            imap.on('end', () => {
                resolve();
            });
            imap.connect();
        });
    }
}

export default EmailService;
