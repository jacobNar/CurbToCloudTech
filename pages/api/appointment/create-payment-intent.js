import StripeService from '@/lib/StripeService';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { contact_name, email, phone_number, service_type } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required for payment' });
        }

        const stripeService = new StripeService();
        const customer = await stripeService.findOrCreateCustomer(email, {
            name: contact_name,
            phone: phone_number
        });

        const paymentAmount = 19900
        const paymentIntent = await stripeService.createPaymentIntent(customer.id, paymentAmount, 'usd', {
            email,
            contact_name: contact_name || '',
            service_type: service_type || '',
            source: 'payment_intent_api'
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id, amount: paymentAmount });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
