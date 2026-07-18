import StripeService from '@/lib/StripeService';
import EmailService from '@/lib/EmailService';

const sanitizePhone = (phone) => {
    if (!phone || typeof phone !== 'string') return null;

    const trimmed = phone.trim();
    if (!trimmed) return null;

    const digits = trimmed.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) return null;

    return trimmed;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { contact_name, email, phone_number, project_description } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        let eventDetailsForClient = null;

        // Google calendar booking is temporarily disabled until Google access is enabled.

        const stripeService = new StripeService();
        const stripeCustomer = await stripeService.findOrCreateCustomer(email, {
            name: contact_name,
            phone: phone_number,
            metadata: {
                description: project_description || ''
            }
        });

        const paymentAmount = 19900;
        let paymentIntentId = null;

        if (paymentAmount > 0) {
            try {
                const paymentIntent = await stripeService.createPaymentIntent(stripeCustomer.id, paymentAmount, 'usd', {
                    email,
                    contact_name: contact_name || '',
                    description: project_description || '',
                    source: 'appointment_request'
                });
                paymentIntentId = paymentIntent.id;
            } catch (err) {
                console.error('Failed to create Stripe pending payment intent:', err);
            }
        }

        const emailService = new EmailService();
        const nameParts = (contact_name || '').split(' ');
        const sanitizedPhone = sanitizePhone(phone_number);

        try {
            await emailService.sendEmail({
                to: email,
                subject: 'We received your service request',
                html: `
                    <p>Hi ${nameParts[0] || 'there'},</p>
                    <p>We have received your service request.</p>
                    <p>We will call you shortly to confirm next steps.</p>
                `,
                text: `Hi ${nameParts[0] || 'there'}, we have received your service request. We will call you shortly to confirm next steps.`
            });
        } catch (err) {
            console.error('Failed to send customer confirmation email:', err);
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        if (adminEmail) {
            try {
                await emailService.sendEmail({
                    to: adminEmail,
                    subject: 'New service request received',
                    html: `
                        <p>New service request received.</p>
                        <p><strong>Customer:</strong> ${contact_name || email}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
                        <p><strong>Description:</strong> ${project_description || 'Not provided'}</p>
                    `,
                    text: `New service request received. Customer: ${contact_name || email}. Email: ${email}. Phone: ${sanitizedPhone || 'Not provided'}. Description: ${project_description || 'Not provided'}.`
                });
            } catch (err) {
                console.error('Failed to send admin notification email:', err);
            }
        }

        return res.status(200).json({
            success: true,
            message: 'Appointment booked successfully!',
            eventDetails: eventDetailsForClient,
            stripeCustomerId: stripeCustomer.id,
            paymentIntentId
        });
    } catch (error) {
        console.error('Error booking appointment:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
