import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import styles from '@/styles/AppointmentModal.module.scss'; // Reusing modal styles if needed

export default function PaymentForm({ onSuccess, onBack }) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setProcessing(true);
        setError(null);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: {
                return_url: window.location.href,
            }
        });

        if (error) {
            setError(error.message);
            setProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setProcessing(false);
            onSuccess();
        } else {
            setProcessing(false);
            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            {error && <div style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{error}</div>}
            <div className={styles.actions} style={{ marginTop: '20px' }}>
                <button type="button" className={styles.backBtn} onClick={onBack} disabled={processing}>Back</button>
                <button type="submit" className={styles.confirmBtn} disabled={!stripe || processing}>
                    {processing ? 'Processing...' : `Pay $10 Deposit & Confirm`}
                </button>
            </div>
        </form>
    );
}
