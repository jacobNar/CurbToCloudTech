import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function SpeedUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Device Performance Boost | Curb to Cloud Tech</title>
      </Head>

      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>Performance Boost</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Give Your Old Computer</span> That "New PC" Feel.
            </h1>
            <p className={styles.heroDesc}>
              Don't replace it—optimize it. We specialize in making slow PCs and Macs fast again.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Speed Up My PC
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img
              className={styles.heroImage}
              alt="Device Tune-Up"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSc9kieVsMgfO864cZf2E-E4sYoTj-JneQ0iUUxlGmCRHSwWHoMKuWlIvFdvNO11tSkhStqaUcaZE7a43VQsIyfeDeneeFDXeA1s4-6D8y3mAnbrAgzehOOXn8TRBMXQCR4t53qTtuSPR_8gknGNtDbaHRcNd7dQ1HSPaha-F5qjcFkqOWl9UcLtibJB2BASEkSemsTwudNaPJVNLJav5gmcGINyROvRsrbsdgHwT5PRkj7obwPH221REqtpdTZEntbqvcQrGGqdhG"
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

      </main>

      <Footer />

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
