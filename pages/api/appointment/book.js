import StripeService from '@/lib/StripeService';

const sanitizePhoneForBrevo = (phone) => {
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
        const { contact_name, email, phone_number, company_name, project_description, appointment_time, type, service_type, address_line1, address_line2, city, state, zip_code } = req.body;

        const address = `${address_line1 || ''} ${address_line2 || ''} ${city || ''}, ${state || ''} ${zip_code || ''}`.trim();

        if (!email || !appointment_time) {
            return res.status(400).json({ message: 'Email and appointment time are required' });
        }

        const isDigital = type === 'online';
        let meetLink = null;
        let eventDetailsForClient = null;

        // Google calendar booking is temporarily disabled until Google access is enabled.

        const stripeService = new StripeService();
        const stripeCustomer = await stripeService.findOrCreateCustomer(email, {
            name: contact_name,
            phone: phone_number,
            address: {
                line1: address_line1 || '',
                line2: address_line2 || '',
                city: city || '',
                state: state || '',
                postal_code: zip_code || ''
            },
            metadata: {
                appointment_time: appointment_time,
                description: project_description || '',
                company_name: company_name || '',
                service_type: service_type || '',
                type: type || ''
            }
        });

        const paymentAmount = 19900;
        let paymentIntentId = null;

        if (paymentAmount > 0) {
            try {
                const paymentIntent = await stripeService.createPaymentIntent(stripeCustomer.id, paymentAmount, 'usd', {
                    email,
                    contact_name: contact_name || '',
                    company_name: company_name || '',
                    service_type: service_type || '',
                    appointment_time,
                    source: 'appointment_request'
                });
                paymentIntentId = paymentIntent.id;
            } catch (err) {
                console.error('Failed to create Stripe pending payment intent:', err);
            }
        }

        // 2. Brevo CRM Contact Creation and transactional email
        if (process.env.BREVO_API_KEY) {
            const nameParts = (contact_name || '').split(' ');
            const sanitizedPhone = sanitizePhoneForBrevo(phone_number);
            const attributes = {
                FIRSTNAME: nameParts[0] || '',
                LASTNAME: nameParts.slice(1).join(' ') || '',
                COMPANY: company_name || '',
                ADDRESS: address || ''
            };

            if (sanitizedPhone) {
                attributes.SMS = sanitizedPhone;
            }

            try {
                const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': process.env.BREVO_API_KEY
                    },
                    body: JSON.stringify({
                        email,
                        listIds: [
                            isDigital ? parseInt(process.env.BREVO_LIST_ID_DIGITAL || '0') : parseInt(process.env.BREVO_LIST_ID_IN_PERSON || '0')
                        ].filter(Boolean),
                        updateEnabled: true,
                        attributes
                    })
                });

                if (!brevoResponse.ok) {
                    const brevoText = await brevoResponse.text();
                    console.error('Failed to add Brevo contact:', brevoText);
                }
            } catch (err) {
                console.error('Failed to add Brevo contact:', err);
            }

            try {
                const sender = {
                    name: 'CurbToCloudTech',
                    email: process.env.BREVO_FROM_EMAIL || process.env.BREVO_ADMIN_EMAIL || email
                };

                const customerEmailPayload = {
                    sender,
                    to: [{ email, name: contact_name || 'Customer' }],
                    subject: 'We received your appointment request',
                    htmlContent: `
                        <p>Hi ${nameParts[0] || 'there'},</p>
                        <p>We have received your appointment request for ${service_type || 'your service'}.</p>
                        <p>We will call you to confirm your appointment.</p>
                        <p><strong>Requested time:</strong> ${new Date(appointment_time).toLocaleString()}</p>
                    `,
                    textContent: `Hi ${nameParts[0] || 'there'}, we have received your appointment request for ${service_type || 'your service'}. We will call you to confirm your appointment. Requested time: ${new Date(appointment_time).toLocaleString()}.`
                };

                const adminEmailPayload = {
                    sender,
                    to: [{ email: process.env.BREVO_ADMIN_EMAIL, name: 'CurbToCloudTech Admin' }],
                    subject: 'New appointment request received',
                    htmlContent: `
                        <p>New appointment request received.</p>
                        <p><strong>Customer:</strong> ${contact_name || email}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
                        <p><strong>Service:</strong> ${service_type || 'N/A'}</p>
                        <p><strong>Requested time:</strong> ${new Date(appointment_time).toLocaleString()}</p>
                        <p><strong>Address:</strong> ${address || 'N/A'}</p>
                    `,
                    textContent: `New appointment request received. Customer: ${contact_name || email}. Email: ${email}. Phone: ${sanitizedPhone || 'Not provided'}. Service: ${service_type || 'N/A'}. Requested time: ${new Date(appointment_time).toLocaleString()}. Address: ${address || 'N/A'}.`
                };

                const customerResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': process.env.BREVO_API_KEY
                    },
                    body: JSON.stringify(customerEmailPayload)
                });

                if (!customerResponse.ok) {
                    const customerText = await customerResponse.text();
                    console.error('Failed to send customer Brevo transactional email:', customerText);
                }

                if (process.env.BREVO_ADMIN_EMAIL) {
                    const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'api-key': process.env.BREVO_API_KEY
                        },
                        body: JSON.stringify(adminEmailPayload)
                    });

                    if (!adminResponse.ok) {
                        const adminText = await adminResponse.text();
                        console.error('Failed to send admin Brevo transactional email:', adminText);
                    }
                }
            } catch (err) {
                console.error('Failed to send Brevo transactional email:', err);
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
