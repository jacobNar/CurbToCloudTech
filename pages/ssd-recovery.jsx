import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function SsdRecovery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Solid State Drive (SSD) Recovery | Curb to Cloud Tech</title>
      </Head>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>SSD Recovery</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Expert SSD Recovery,</span> Without the Wait.
            </h1>
            <p className={styles.heroDesc}>
              Solid state drives are fast but can fail without warning due to firmware bugs or power surges. Our mobile lab uses advanced techniques to recover your SSD data right at your door.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Get Your Files Back
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} alt="SSD Recovery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnFwLCt_coyVYSkDuSyCuM3uijn6PuPmb_815IPKdbXCaj32mWFObjWiiAgDghAdrvbU1x-gks3m-6il6W1msA3NZNLdenYd3_Rutcfog6h-saoTqpuFp1YdYl9vhXeBUD-Axa-L1xDjSpqucpnokjPA_Dr4Ci2BNn4jBNNUuCo_yRTEevqbeuA-FWmbH8ABMr_OHKC2eHxkd_XsHh1rHKnJ5dXuv3IYa3_yI1zPdYJaiq1_6BY10HWNGp_vn8KLntBjSgdflVaIw" />
            <div className={styles.trustCardWrapper}>
              <div className={styles.trustCard}>
                <div className={styles.trustCardHeader}>
                  <div className={styles.trustIcon}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <span className={styles.trustTitle}>The Guarantee</span>
                </div>
                <p className={styles.trustCardDesc}>No Data, No Fee. If we can't recover your files, you don't pay a cent.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.scenariosSection}>
          <div className={styles.scenariosContainer}>
            <div className={styles.scenariosHeader}>
              <h2>Common SSD Issues We Handle</h2>
              <p>SSD data recovery requires completely different techniques than older rotating drives. We have the expertise to bypass controllers and read memory directly.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">memory</span></div>
                <h3 className={styles.scenarioTitle}>Firmware Corruption</h3>
                <p className={styles.scenarioDesc}>SSDs run complex software on their controllers. When this crashes, the drive disappears. We fix the firmware so we can extract your data.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">bolt</span></div>
                <h3 className={styles.scenarioTitle}>Power Surges</h3>
                <p className={styles.scenarioDesc}>Electrical spikes can fry SSD components. We can often safely bypass damaged electronic components to read data from the surviving NAND chips.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">delete_forever</span></div>
                <h3 className={styles.scenarioTitle}>Accidental Deletion & TRIM</h3>
                <p className={styles.scenarioDesc}>Because of the TRIM command, recovering deleted SSD files must be done immediately. Call us and turn off your computer instantly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
