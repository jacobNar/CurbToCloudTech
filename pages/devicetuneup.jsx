import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';
import AppointmentModal from '../components/AppointmentModal';

export default function DeviceTuneUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Device Tune-Up | Curb to Cloud Tech</title>
      </Head>

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Give Your Old Computer</span> That "New PC" Feel.
            </h1>
            <div className={styles.heroBadges}>
               <span className={styles.badgeOne}>
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  No Fix, No Fee
               </span>
               <span className={styles.badgeTwo}>
                  <span className="material-symbols-outlined text-sm">home_pin</span>
                  Local & Reliable
               </span>
            </div>
            <p className={styles.heroDesc}>
              Don't replace it—optimize it. We specialize in making slow PCs and Macs fast again.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Device Tune-Up
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              className={styles.heroImage}
              alt="Device Tune-Up"
              src="/images/tuneup.png"
              width={800}
              height={600}
              priority
            />
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.processContainer}>
            <div>
              <h2 className={styles.processTitle}>
                Service Includes
              </h2>
              <div className={styles.processSteps}>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.darkBg}`}>1</div>
                  <div className={styles.stepContent}>
                     <p>Deep cleaning of system junk.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.accentBg}`}>2</div>
                  <div className={styles.stepContent}>
                     <p>Disabling resource-heavy background services.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.darkBg}`}>3</div>
                  <div className={styles.stepContent}>
                     <p>Optimizing startup sequences.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.accentBg}`}>4</div>
                  <div className={styles.stepContent}>
                     <p>Checking for malware that hides in the background.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
               <h2 className={styles.processTitle}>
                 Why it Works
               </h2>
               <p style={{fontSize: "1.25rem", lineHeight: "1.6", color: "var(--on-surface-variant)"}}>
                  Over time, "digital clutter" bogs down even high-end machines. We trim the fat so your computer boots faster and responds instantly.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h4>Will this delete my files?</h4>
                <p>No, our device tune-up process is completely non-destructive. It focuses on cleaning up junk, optimizing settings, and removing bloatware without affecting your personal documents or photos.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>How long does a tune-up take?</h4>
                <p>A typical system tune-up takes around an hour. If a deeper virus scan or major OS update is required, it could take slightly longer.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Do I need new hardware?</h4>
                <p>Often, a deep spring cleaning of your software brings a dramatic speed increase without any new parts. If we do recommend a RAM or SSD upgrade, we'll suggest cost-effective options.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>What if the tune-up doesn't speed things up?</h4>
                <p>Our "No Fix, No Fee" policy stands. If your device's speed doesn't noticeably improve, we simply don't charge you for the service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Hero Visual at bottom */}
        <div className={styles.heroVisualMobile}>
          <Image
            className={styles.heroImage}
            alt="Device Tune-Up"
            src="/images/tuneup.png"
            width={800}
            height={600}
          />
        </div>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
