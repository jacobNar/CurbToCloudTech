import Stripe from 'stripe';

class StripeService {
    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_SK);
    }

    async findOrCreateCustomer(email, details = {}) {
        const customers = await this.stripe.customers.search({
            query: `email:\'${email}\'`,
            limit: 1
        });

        if (customers.data.length > 0) {
            const customer = customers.data[0];
            return await this.updateCustomer(customer.id, details);
        }

        return await this.createCustomer(email, details);
    }

    async createCustomer(email, details) {
        const payload = {
            email,
            name: details.name,
            phone: details.phone
        };

        if (details.address) {
            payload.address = details.address;
        }

        if (details.metadata) {
            payload.metadata = details.metadata;
        }

        return await this.stripe.customers.create(payload);
    }

    async updateCustomer(customerId, details) {
        const payload = {};

        if (details.name) {
            payload.name = details.name;
        }
        if (details.phone) {
            payload.phone = details.phone;
        }
        if (details.address) {
            payload.address = details.address;
        }
        if (details.metadata) {
            payload.metadata = details.metadata;
        }

        return await this.stripe.customers.update(customerId, payload);
    }

    async createPaymentIntent(customerId, amount = 1000, currency = 'usd') {
        return await this.stripe.paymentIntents.create({
            amount,
            currency,
            customer: customerId,
            automatic_payment_methods: {
                enabled: true
            }
        });
    }
}

export default StripeService;
