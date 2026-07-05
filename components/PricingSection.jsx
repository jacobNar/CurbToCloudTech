import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('./AppointmentModal'), { ssr: false });

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-light">
      <div className="width-container">
        <div className={styles.scenariosHeader}>
          <h2 style={{ color: '#002046' }}>Simple, Success-Based Pricing</h2>
          <p style={{ color: '#44474e' }}>No diagnostics fee, no hourly rates, and absolutely no risk. You only pay when we successfully rescue your files.</p>
        </div>

        <div className={styles.pricingGridSingle}>
          <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
            <div className={styles.pricingHeader}>
              <span className={`material-symbols-outlined ${styles.pricingIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h3>Complete Data Recovery</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>199</span>
                <span className={styles.period}>/ success</span>
              </div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>
                <span className="material-symbols-outlined">check</span>
                Bypass operating system crashes & boot loops
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                Extract from locked accounts & forgotten passwords
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                Recover files from dead or unbootable PCs & Macs
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                We deliver all recovered files on a brand new USB flash drive at no extra cost
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                No Data, No Fee Guarantee
              </li>
            </ul>
            <button className="btn btn-large" onClick={() => setIsModalOpen(true)}>Book Recovery Now</button>
          </div>
        </div>
      </div>
      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
