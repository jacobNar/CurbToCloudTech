import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function HddRecovery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Hard Drive (HDD) Data Recovery | Curb to Cloud Tech</title>
      </Head>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>HDD Recovery</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Clicking Hard Drive?</span> We Rescue Your Data at Your Door.
            </h1>
            <p className={styles.heroDesc}>
              Lost photos or documents from a failing mechanical drive? Mechanical hard drives are incredibly fragile. Shipping them is a risk you don't have to take. We bring the recovery lab to you.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Get Your Files Back
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} alt="HDD Recovery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnFwLCt_coyVYSkDuSyCuM3uijn6PuPmb_815IPKdbXCaj32mWFObjWiiAgDghAdrvbU1x-gks3m-6il6W1msA3NZNLdenYd3_Rutcfog6h-saoTqpuFp1YdYl9vhXeBUD-Axa-L1xDjSpqucpnokjPA_Dr4Ci2BNn4jBNNUuCo_yRTEevqbeuA-FWmbH8ABMr_OHKC2eHxkd_XsHh1rHKnJ5dXuv3IYa3_yI1zPdYJaiq1_6BY10HWNGp_vn8KLntBjSgdflVaIw" />
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
              <h2>Common HDD Failures We Fix</h2>
              <p>We are equipped to safely handle all mechanical and logical drive failures without risking further platter damage.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">warning</span></div>
                <h3 className={styles.scenarioTitle}>Clicking/Beeping</h3>
                <p className={styles.scenarioDesc}>Often implies head failure or stiction. We use ISO-compliant techniques to safely extract data from mechanically compromised drives.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">usb_off</span></div>
                <h3 className={styles.scenarioTitle}>Unrecognized Drives</h3>
                <p className={styles.scenarioDesc}>When your computer says "Drive not formatted" or doesn't see it at all, our deep sector diagnostics software can still read the raw data.</p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}><span className="material-symbols-outlined">delete_forever</span></div>
                <h3 className={styles.scenarioTitle}>Accidental Formatting</h3>
                <p className={styles.scenarioDesc}>Deleted partitions or formatted volumes can usually be completely recovered as long as you stop using the disk immediately.</p>
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
