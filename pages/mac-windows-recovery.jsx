import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function MacWindowsRecovery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Apple Mac & Windows PC Recovery | Curb to Cloud Tech</title>
      </Head>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>Computer Recovery</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Dead Laptop?</span> We Extract Your Files Safely.
            </h1>
            <p className={styles.heroDesc}>
              Whether your Apple MacBook won't turn on or your Windows PC is stuck in a boot loop, your data is usually perfectly safe. We extract it on-site so you never lose your documents or photos.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Get Your Files Back
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} alt="PC/Mac Recovery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnFwLCt_coyVYSkDuSyCuM3uijn6PuPmb_815IPKdbXCaj32mWFObjWiiAgDghAdrvbU1x-gks3m-6il6W1msA3NZNLdenYd3_Rutcfog6h-saoTqpuFp1YdYl9vhXeBUD-Axa-L1xDjSpqucpnokjPA_Dr4Ci2BNn4jBNNUuCo_yRTEevqbeuA-FWmbH8ABMr_OHKC2eHxkd_XsHh1rHKnJ5dXuv3IYa3_yI1zPdYJaiq1_6BY10HWNGp_vn8KLntBjSgdflVaIw" />
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
              <h2>System Failures We Master</h2>
              <p>Hardware deaths and operating system crashes don't mean your files are gone. We utilize deep techniques to pull your data to safety.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">water_drop</span></div>
                <h3 className={styles.scenarioTitle}>Liquid Damage</h3>
                <p className={styles.scenarioDesc}>Spilled coffee on your MacBook? While the motherboard might be toast, we can usually still extract the data directly from the soldered memory modules.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">power_settings_new</span></div>
                <h3 className={styles.scenarioTitle}>Blue/Black Screens</h3>
                <p className={styles.scenarioDesc}>If Windows blue-screens or your Mac shows a flashing folder with a question mark, the OS is corrupted but your files remain. We bypass the OS entirely.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">lock</span></div>
                <h3 className={styles.scenarioTitle}>Encryption Issues</h3>
                <p className={styles.scenarioDesc}>We have extensive experience with BitLocker and FileVault. If you are locked out but have your recovery keys, we can bypass hardware locks to extract the data.</p>
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
