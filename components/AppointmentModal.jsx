import React, { useState, useEffect } from 'react';
import styles from '@/styles/AppointmentModal.module.scss';

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
        type: 'online',
        address: ''
    });

    // Reset state when opened
    useEffect(() => {
        setStep('date');
        setSelectedDate(null);
        setSelectedTime(null);
        setEventDetails(null);
        setFormData({ contact_name: '', email: '', phone_number: '', company_name: '', project_description: '', type: 'online', address: '' });
    }, []);

    // Mock Calendar Generation (Current Month)
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

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

            const processedSlots = (data.slots || []).map((time) => {
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
        if (date.getTime() < new Date().setHours(0, 0, 0, 0)) return; // Disable past dates

        setSelectedDate(date);
        fetchSlots(date);
        setStep('time');
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep('details');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                {days.map(d => {
                                    const date = new Date(today.getFullYear(), today.getMonth(), d);
                                    const isPast = date < new Date();
                                    return (
                                        <button
                                            key={d}
                                            className={styles.dayBtn}
                                            disabled={isPast && date.getDate() !== today.getDate()}
                                            onClick={() => handleDateSelect(d)}
                                        >
                                            {d}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {step === 'time' && (
                        <div>
                            <p className={styles.label}>Available times for {selectedDate?.toLocaleDateString()}</p>
                            <div className={styles.timeGrid}>
                                {loading ? <p>Loading...</p> : slots.map(slot => (
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
                        <form onSubmit={handleSubmit}>
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
                                <label className={styles.label}>Meeting Type</label>
                                <select 
                                    className={styles.input}
                                    value={formData.type}
                                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="online">Online / Google Meets</option>
                                    <option value="inperson">In Person / On-site</option>
                                </select>
                            </div>
                            {formData.type === 'inperson' && (
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Service Address</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        required
                                        placeholder="123 Main St, City, ST 12345"
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
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
                                    {loading ? 'Confirming...' : 'Confirm Appointment'}
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h2>Appointment Confirmed!</h2>
                            <p>We have sent a confirmation email to {formData.email}.</p>
                            
                            {eventDetails && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', marginBottom: '20px', alignItems: 'center' }}>
                                    <button 
                                        className={styles.confirmBtn} 
                                        style={{ backgroundColor: '#4285F4', width: '100%', maxWidth: '250px' }}
                                        onClick={() => {
                                            const start = new Date(eventDetails.start.dateTime).toISOString().replace(/-|:|\.\d\d\d/g, '');
                                            const end = new Date(eventDetails.end.dateTime).toISOString().replace(/-|:|\.\d\d\d/g, '');
                                            const url = new URL('https://calendar.google.com/calendar/render');
                                            url.searchParams.append('action', 'TEMPLATE');
                                            url.searchParams.append('text', eventDetails.summary || 'Meeting');
                                            url.searchParams.append('dates', `${start}/${end}`);
                                            
                                            let desc = eventDetails.description || '';
                                            if (eventDetails.hangoutLink) desc += `\n\nGoogle Meet: ${eventDetails.hangoutLink}`;
                                            url.searchParams.append('details', desc);
                                            
                                            if (eventDetails.location) url.searchParams.append('location', eventDetails.location);
                                            window.open(url.toString(), '_blank');
                                        }}
                                    >
                                        Add to Google Calendar
                                    </button>
                                    
                                    <button 
                                        className={styles.backBtn}
                                        style={{ width: '100%', maxWidth: '250px' }}
                                        onClick={() => {
                                            const start = new Date(eventDetails.start.dateTime).toISOString().replace(/-|:|\.\d\d\d/g, '');
                                            const end = new Date(eventDetails.end.dateTime).toISOString().replace(/-|:|\.\d\d\d/g, '');
                                            let desc = (eventDetails.description || '').replace(/\n/g, '\\n');
                                            if (eventDetails.hangoutLink) desc += `\\n\\nGoogle Meet: ${eventDetails.hangoutLink}`;
                                            
                                            const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${eventDetails.summary || 'Meeting'}\nDESCRIPTION:${desc}\nLOCATION:${eventDetails.location || ''}\nEND:VEVENT\nEND:VCALENDAR`;
                                            
                                            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
                                            const link = document.createElement('a');
                                            link.href = URL.createObjectURL(blob);
                                            link.download = 'appointment.ics';
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                    >
                                        Download .ICS (Apple/Outlook)
                                    </button>
                                </div>
                            )}

                            <button className={styles.confirmBtn} onClick={onClose}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
