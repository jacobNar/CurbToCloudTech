import styles from '@/styles/Recover.module.scss';

export default function LeadCTASection({ onBookClick }) {
  return (
    <section className="section-padding bg-primary-theme">
      <div className="width-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div className={styles.scenariosHeader} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to Retrieve Your Critical Files?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Submit our simplified booking request below. Our team will verify your desired date and contact you directly. We will review your case to see if we can help you immediately over the phone, or dispatch a technician for an on-site recovery visit.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-secondary btn-large" onClick={onBookClick}>
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
