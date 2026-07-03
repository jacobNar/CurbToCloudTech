import React, { useState, useEffect } from 'react';
import styles from '@/styles/AppointmentModal.module.scss';

// Stripe payment flow is temporarily disabled. The booking request still creates
// a pending payment intent server-side when the appointment is submitted.
export default function AppointmentModal({ onClose }) {
    const [step, setStep] = useState('date');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [eventDetails, setEventDetails] = useState(null);

    const [formData, setFormData] = useState({
        contact_name: '',
        email: '',
        phone_number: '',
        company_name: '',
        project_description: '',
        type: 'inperson',
        service_type: 'Data Recovery',
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        zip_code: ''
    });

    // Reset state when opened
    useEffect(() => {
        setStep('date');
        setSelectedDate(null);
        setSelectedTime(null);
        setEventDetails(null);
        setFormData({ contact_name: '', email: '', phone_number: '', company_name: '', project_description: '', type: 'inperson', service_type: 'Data Recovery', address_line1: '', address_line2: '', city: '', state: '', zip_code: '' });
    }, []);

    // Calendar Generation (Current Month)
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayIndex = firstDayOfMonth.getDay();
    const totalCells = firstDayIndex + daysInMonth;
    const calendarRows = Array.from({ length: Math.ceil(totalCells / 7) }, (_, rowIndex) =>
        Array.from({ length: 7 }, (_, colIndex) => {
            const cellIndex = rowIndex * 7 + colIndex;
            const dayNumber = cellIndex - firstDayIndex + 1;
            if (cellIndex < firstDayIndex || dayNumber > daysInMonth) {
                return null;
            }
            return dayNumber;
        })
    );

    const fetchSlots = async (date) => {
        setLoading(true);
        try {
            const offset = date.getTimezoneOffset();
            const localDate = new Date(date.getTime() - (offset * 60 * 1000));
            const dateStr = localDate.toISOString().split('T')[0];

            const res = await fetch(`/api/appointment/get-slots?date=${dateStr}`);
            const data = await res.json();

            const busyBlocks = data.busyBlocks || [];
            const bookedSet = new Set(data.booked || []);
            const slotTimes = data.slots || [];

            const processedSlots = slotTimes.map((time) => {
                const [hours, minutes] = time.split(':').map(Number);
                const slotStart = new Date(date);
                slotStart.setHours(hours, minutes, 0, 0);
                const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000); // 1 hour slot

                const isPast = slotStart.getTime() < new Date().getTime();

                let isBooked = bookedSet.has(slotStart.toISOString());

                for (const block of busyBlocks) {
                    const blockStart = new Date(block.start).getTime();
                    const blockEnd = new Date(block.end).getTime();
                    if (slotStart.getTime() < blockEnd && slotEnd.getTime() > blockStart) {
                        isBooked = true;
                        break;
                    }
                }

                return { time, available: !isBooked && !isPast };
            });

            setSlots(processedSlots);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    const handleDateSelect = (day) => {
        const date = new Date(today.getFullYear(), today.getMonth(), day);
        const isPast = date.getTime() < new Date().setHours(0, 0, 0, 0);
        if (isPast) return;

        setSelectedDate(date);
        fetchSlots(date);
        setStep('time');
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep('details');
    };

    const handleBookAppointment = async (e) => {
        if (e?.preventDefault) {
            e.preventDefault();
        }

        setLoading(true);

        // Combine date and time
        const [hours, minutes] = selectedTime.split(':').map(Number);
        const appointmentTime = new Date(selectedDate);
        appointmentTime.setHours(hours, minutes);

        try {
            const res = await fetch('/api/appointment/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    appointment_time: appointmentTime.toISOString()
                })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.eventDetails) {
                    setEventDetails(data.eventDetails);
                }
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
                        {step === 'date' && 'Select a Date'}
                        {step === 'time' && 'Select a Time'}
                        {step === 'details' && 'Your Details'}
                        {step === 'success' && 'Confirmed!'}
                    </h3>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                </div>

                <div className={styles.content}>
                    {step === 'date' && (
                        <div>
                            <p className={styles.calendarHead}>{currentMonth} {today.getFullYear()}</p>
                            <div className={styles.calendarGrid}>
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                    <div key={i} className={styles.calendarHead}>{d}</div>
                                ))}
                                {calendarRows.flatMap((week, rowIndex) =>
                                    week.map((day, colIndex) => {
                                        if (day === null) {
                                            return <div key={`empty-${rowIndex}-${colIndex}`} className={styles.dayBtn} style={{ visibility: 'hidden' }} />;
                                        }

                                        const date = new Date(year, month, day);
                                        const isPast = date < new Date();
                                        return (
                                            <button
                                                key={day}
                                                className={styles.dayBtn}
                                                disabled={isPast && date.getDate() !== today.getDate()}
                                                onClick={() => handleDateSelect(day)}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    )}

                    {step === 'time' && (
                        <div>
                            <p className={styles.label}>Available times for {selectedDate?.toLocaleDateString()}</p>
                            <div className={styles.timeGrid}>
                                {loading ? <p style={{ color: 'var(--color-on-surface)', textAlign: 'center', gridColumn: '1 / -1', padding: '1rem' }}>Loading...</p> : slots.map(slot => (
                                    <button
                                        key={slot.time}
                                        className={styles.timeBtn}
                                        disabled={!slot.available}
                                        style={!slot.available ? { opacity: 0.5, cursor: 'not-allowed', backgroundColor: '#e2e8f0' } : {}}
                                        onClick={() => handleTimeSelect(slot.time)}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.backBtn} onClick={() => setStep('date')}>Back</button>
                            </div>
                        </div>
                    )}

                    {step === 'details' && (
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
                                <label className={styles.label}>Company/Household Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={formData.company_name}
                                    onChange={e => setFormData({ ...formData, company_name: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Service Type</label>
                                <select
                                    className={styles.input}
                                    value={formData.service_type}
                                    onChange={e => {
                                        // "Website" or similar future services will be 'online'
                                        const isOnlineService = e.target.value.toLowerCase().includes('website');
                                        setFormData({
                                            ...formData,
                                            service_type: e.target.value,
                                            type: isOnlineService ? 'online' : 'inperson'
                                        });
                                    }}
                                >
                                    <option value="Data Recovery">Data Recovery</option>
                                    <option value="Hourly Tech Support">Hourly Tech Support</option>
                                    <option value="Device Tune-Up">Device Tune-Up</option>
                                </select>
                            </div>
                            {formData.type === 'inperson' && (
                                <>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Address Line 1</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            required
                                            placeholder="123 Main St"
                                            value={formData.address_line1}
                                            onChange={e => setFormData({ ...formData, address_line1: e.target.value })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Address Line 2</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="Apt 4B"
                                            value={formData.address_line2}
                                            onChange={e => setFormData({ ...formData, address_line2: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <div className={styles.formGroup} style={{ flex: 2 }}>
                                            <label className={styles.label}>City</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                required
                                                value={formData.city}
                                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup} style={{ flex: 1 }}>
                                            <label className={styles.label}>State</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                required
                                                value={formData.state}
                                                onChange={e => setFormData({ ...formData, state: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup} style={{ flex: 1 }}>
                                            <label className={styles.label}>ZIP</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                required
                                                value={formData.zip_code}
                                                onChange={e => setFormData({ ...formData, zip_code: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>What do you need help with?</label>
                                <textarea
                                    className={styles.textarea}
                                    value={formData.project_description}
                                    onChange={e => setFormData({ ...formData, project_description: e.target.value })}
                                />
                            </div>

                            <div className={styles.reviewItem}>
                                <span className={styles.reviewLabel}>Appointment Time</span>
                                <span className={styles.reviewValue}>
                                    {selectedDate?.toLocaleDateString()} at {selectedTime}
                                </span>
                            </div>

                            <div className={styles.actions}>
                                <button type="button" className={styles.backBtn} onClick={() => setStep('time')}>Back</button>
                                <button type="submit" className={styles.confirmBtn} disabled={loading}>
                                    {loading ? 'Processing...' : 'Confirm Appointment'}
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h2 id="appointment-confirmed">Appointment Confirmed!</h2>
                            <p>We have sent a confirmation email to {formData.email}.</p>


                            <button className={styles.confirmBtn} onClick={onClose}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
