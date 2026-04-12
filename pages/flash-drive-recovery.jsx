import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function FlashDriveRecovery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>USB & Flash Drive Data Recovery | Curb to Cloud Tech</title>
      </Head>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>Flash Media Recovery</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Broken USB or SD Card?</span> Don't Panic.
            </h1>
            <p className={styles.heroDesc}>
              Bent USB ports, "Format Required" errors on SD cards, or snapped flash drives—we recover memories and critical files when your portable media fails.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Get Your Files Back
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} alt="Flash Drive Recovery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnFwLCt_coyVYSkDuSyCuM3uijn6PuPmb_815IPKdbXCaj32mWFObjWiiAgDghAdrvbU1x-gks3m-6il6W1msA3NZNLdenYd3_Rutcfog6h-saoTqpuFp1YdYl9vhXeBUD-Axa-L1xDjSpqucpnokjPA_Dr4Ci2BNn4jBNNUuCo_yRTEevqbeuA-FWmbH8ABMr_OHKC2eHxkd_XsHh1rHKnJ5dXuv3IYa3_yI1zPdYJaiq1_6BY10HWNGp_vn8KLntBjSgdflVaIw" />
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
              <h2>Common Flash Drive Issues</h2>
              <p>We work with all brands of USB thumb drives, SD cards, and microSD cards directly at your location.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">cable</span></div>
                <h3 className={styles.scenarioTitle}>Bent / Snapped Connectors</h3>
                <p className={styles.scenarioDesc}>If someone bumped your laptop and bent the USB drive, DO NOT try to bend it back! We can carefully bypass the broken connector to retrieve the data.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">warning</span></div>
                <h3 className={styles.scenarioTitle}>"Format Required" Error</h3>
                <p className={styles.scenarioDesc}>When your computer asks to format the drive before using it, the file system is corrupted. We can bypass the error and rescue the contents.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">camera_alt</span></div>
                <h3 className={styles.scenarioTitle}>Accidental Formatting</h3>
                <p className={styles.scenarioDesc}>Formatted your camera's SD card by accident? Stop recording immediately, pull the card out, and call us. We can un-delete those memories.</p>
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
