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

        const emailService = new EmailService();
        const nameParts = (contact_name || '').split(' ');
        const sanitizedPhone = sanitizePhone(phone_number);

        try {
            await emailService.sendEmail({
                to: email,
                subject: 'We received your appointment request',
                html: `
                    <p>Hi ${nameParts[0] || 'there'},</p>
                    <p>We have received your appointment request for ${service_type || 'your service'}.</p>
                    <p>We will call you to confirm your appointment.</p>
                    <p><strong>Requested time:</strong> ${new Date(appointment_time).toLocaleString()}</p>
                `,
                text: `Hi ${nameParts[0] || 'there'}, we have received your appointment request for ${service_type || 'your service'}. We will call you to confirm your appointment. Requested time: ${new Date(appointment_time).toLocaleString()}.`
            });
        } catch (err) {
            console.error('Failed to send customer confirmation email:', err);
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        if (adminEmail) {
            try {
                await emailService.sendEmail({
                    to: adminEmail,
                    subject: 'New appointment request received',
                    html: `
                        <p>New appointment request received.</p>
                        <p><strong>Customer:</strong> ${contact_name || email}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
                        <p><strong>Service:</strong> ${service_type || 'N/A'}</p>
                        <p><strong>Requested time:</strong> ${new Date(appointment_time).toLocaleString()}</p>
                        <p><strong>ZIP Code:</strong> ${zip_code || 'N/A'}</p>
                    `,
                    text: `New appointment request received. Customer: ${contact_name || email}. Email: ${email}. Phone: ${sanitizedPhone || 'Not provided'}. Service: ${service_type || 'N/A'}. Requested time: ${new Date(appointment_time).toLocaleString()}. ZIP Code: ${zip_code || 'N/A'}.`
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
