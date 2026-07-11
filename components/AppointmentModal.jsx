import React, { useState, useEffect } from 'react';
import styles from '@/styles/AppointmentModal.module.scss';

export default function AppointmentModal({ onClose }) {
    const [step, setStep] = useState('form');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        contact_name: '',
        email: '',
        phone_number: '',
        project_description: '',
        type: 'inperson',
        service_type: 'In-Home Data Recovery',
        zip_code: ''
    });

    useEffect(() => {
        setStep('form');
        setSelectedDateTime('');
        setFormData({
            contact_name: '',
            email: '',
            phone_number: '',
            project_description: '',
            type: 'inperson',
            service_type: 'In-Home Data Recovery',
            zip_code: ''
        });
    }, []);

    const getMinDateTime = () => {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
    };

    const handleBookAppointment = async (e) => {
        if (e?.preventDefault) {
            e.preventDefault();
        }

        setLoading(true);

        const appointmentTime = new Date(selectedDateTime).toISOString();

        try {
            const res = await fetch('/api/appointment/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    appointment_time: appointmentTime
                })
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
                        {step === 'form' && 'Book Appointment'}
                        {step === 'success' && 'Confirmed!'}
                    </h3>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                </div>

                <div className={styles.content}>
                    {step === 'form' && (
                        <form onSubmit={handleBookAppointment}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    required
                                    value={formData.contact_name}
                                    onChange={e => setFormData({ ...formData, contact_name: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    className={styles.input}
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone</label>
                                <input
                                    type="tel"
                                    className={styles.input}
                                    value={formData.phone_number}
                                    onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Service Type</label>
                                <select
                                    className={styles.input}
                                    value={formData.service_type}
                                    onChange={e => {
                                        const isOnlineService = e.target.value.toLowerCase().includes('website');
                                        setFormData({
                                            ...formData,
                                            service_type: e.target.value,
                                            type: isOnlineService ? 'online' : 'inperson'
                                        });
                                    }}
                                >
                                    <option value="In-Home Data Recovery">In-Home Data Recovery</option>
                                    <option value="Device Pick-Up & Return">Device Pick-Up & Return</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Desired Date & Time</label>
                                <input
                                    type="datetime-local"
                                    className={styles.input}
                                    required
                                    min={getMinDateTime()}
                                    value={selectedDateTime}
                                    onChange={e => setSelectedDateTime(e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ZIP Code</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    required
                                    value={formData.zip_code}
                                    onChange={e => setFormData({ ...formData, zip_code: e.target.value })}
                                />
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
                                    {loading ? 'Processing...' : 'Confirm Appointment'}
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
