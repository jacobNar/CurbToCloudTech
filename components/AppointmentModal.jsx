import React, { useState, useEffect } from 'react';
import styles from '@/styles/AppointmentModal.module.scss';

export default function AppointmentModal({ onClose }) {
    const [step, setStep] = useState('form');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        contact_name: '',
        email: '',
        phone_number: '',
        project_description: ''
    });

    useEffect(() => {
        setStep('form');
        setFormData({
            contact_name: '',
            email: '',
            phone_number: '',
            project_description: ''
        });
        setErrors({});
    }, []);

    const handleBookAppointment = async (e) => {
        if (e?.preventDefault) {
            e.preventDefault();
        }

        const newErrors = {};
        if (!formData.contact_name.trim()) {
            newErrors.contact_name = 'Name is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone_number.trim()) {
            newErrors.phone_number = 'Phone number is required';
        } else {
            const phoneDigits = formData.phone_number.replace(/\D/g, '');
            if (phoneDigits.length < 7 || phoneDigits.length > 15) {
                newErrors.phone_number = 'Please enter a valid phone number';
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            const res = await fetch('/api/appointment/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStep('success');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Error booking appointment.');
        }
        setLoading(false);
    };

    return (
        <div className={styles.overlay}>
            <div className={`${styles.popup} fade-in`}>
                <div className={styles.header}>
                    <h3>
                        {step === 'form' && 'Request Service'}
                        {step === 'success' && 'Confirmed!'}
                    </h3>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                </div>

                <div className={styles.content}>
                    {step === 'form' && (
                        <form onSubmit={handleBookAppointment} noValidate>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Name <span className={styles.requiredStar}>*</span></label>
                                <input
                                    type="text"
                                    className={`${styles.input} ${errors.contact_name ? styles.inputError : ''}`}
                                    required
                                    value={formData.contact_name}
                                    onChange={e => {
                                        setFormData({ ...formData, contact_name: e.target.value });
                                        if (errors.contact_name) {
                                            setErrors({ ...errors, contact_name: null });
                                        }
                                    }}
                                />
                                {errors.contact_name && (
                                    <span className={styles.errorText}>{errors.contact_name}</span>
                                )}
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email <span className={styles.requiredStar}>*</span></label>
                                <input
                                    type="email"
                                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                    required
                                    value={formData.email}
                                    onChange={e => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) {
                                            setErrors({ ...errors, email: null });
                                        }
                                    }}
                                />
                                {errors.email && (
                                    <span className={styles.errorText}>{errors.email}</span>
                                )}
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone <span className={styles.requiredStar}>*</span></label>
                                <input
                                    type="tel"
                                    className={`${styles.input} ${errors.phone_number ? styles.inputError : ''}`}
                                    required
                                    value={formData.phone_number}
                                    onChange={e => {
                                        setFormData({ ...formData, phone_number: e.target.value });
                                        if (errors.phone_number) {
                                            setErrors({ ...errors, phone_number: null });
                                        }
                                    }}
                                />
                                {errors.phone_number && (
                                    <span className={styles.errorText}>{errors.phone_number}</span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>What do you need help with?</label>
                                <textarea
                                    className={styles.textarea}
                                    value={formData.project_description}
                                    onChange={e => setFormData({ ...formData, project_description: e.target.value })}
                                />
                            </div>

                            <div className={styles.actions}>
                                <button type="submit" className={styles.confirmBtn} disabled={loading}>
                                    {loading ? 'Processing...' : 'Submit Request'}
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h2 id="appointment-confirmed">Request Received!</h2>
                            <p>We have sent a confirmation email to {formData.email}.</p>
                            <p>A data recovery technician will call you shortly to review your device details and confirm next steps.</p>
                            <button className={styles.confirmBtn} onClick={onClose}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
