import styles from '@/styles/Recover.module.scss';

export default function EmergencySection() {
  return (
    <section className="section-padding bg-primary-theme">
      <div className="width-container">
        <div className={styles.scenariosHeader}>
          <h2 style={{ color: 'white' }}>Important: What to Do If Your Computer Won't Boot</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Follow these crucial steps to protect your files before we arrive.</p>
        </div>
        <div className={styles.scenariosGrid}>
          <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
            <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>1. Do Not Force Reboots</h3>
            <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Repeatedly powering a crashed or unbootable system on and off can corrupt your files. Keep the device powered off.</p>
          </div>
          <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
            <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>2. Avoid Factory Resets</h3>
            <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Do not trigger a "system restore" or "factory reset" in an attempt to bypass locks, as this will permanently erase your personal data.</p>
          </div>
          <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
            <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>3. Professional Extraction</h3>
            <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Call us and we will securely extract the healthy storage drive or bypass the lock to safely retrieve your files from our Mobile Work Center.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
