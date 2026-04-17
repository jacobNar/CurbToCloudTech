import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import AppointmentModal from '../components/AppointmentModal';
import Link from 'next/link';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Pricing & Strategy | Curb to Cloud Tech</title>
      </Head>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent} style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 className={styles.heroTitle}>Pricing Model</h1>
            <p className={styles.heroDesc} style={{ margin: "0 auto 3rem auto" }}>
              No hidden hourly traps. For general support, we charge a flat diagnostic fee for the first hour, which covers most common fixes. If it's a bigger project, we'll give you a quote before we keep working.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: "center" }}>
               <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>Book a Visit</button>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h4>Data Recovery</h4>
                <p><strong>Pricing Model:</strong> Flat Fee (Simple) / Tiered (Complex)</p>
                <p><strong>Estimated Rate:</strong> $150 - $350+ (Success only)</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Tech Support</h4>
                <p><strong>Pricing Model:</strong> First Hour Flat + Incremental</p>
                <p><strong>Estimated Rate:</strong> $99 (First hr) + $45 per addl. 30m</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Device Tune-Up</h4>
                <p><strong>Pricing Model:</strong> Flat Fee per Device</p>
                <p><strong>Estimated Rate:</strong> $125 per computer</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Add-ons</h4>
                <p><strong>Pricing Model:</strong> USB Drive / Storage Media</p>
                <p><strong>Estimated Rate:</strong> $20 - $40</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
