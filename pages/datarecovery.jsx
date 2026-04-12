import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';

export default function Recover() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Data Recovery | Curb to Cloud Tech</title>
      </Head>

      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section: Editorial Asymmetry */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.pillLabel}>Digital Concierge</span>
            <h1 className={styles.heroTitle}><span className={styles.heroTitleHighlight}>Expert Data Recovery</span> at Your Doorstep
            </h1>
            <p className={styles.heroDesc}>
              Losing your precious memories or critical work is stressful. We bring high-end recovery labs directly to your curb, so you never have to worry about your data leaving your sight.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Get Your Files Back
              </button>
              <button className={styles.secondaryBtn} onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}>
                Learn Our Process
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img
              className={styles.heroImage}
              alt="Mobile Tech Work Center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnFwLCt_coyVYSkDuSyCuM3uijn6PuPmb_815IPKdbXCaj32mWFObjWiiAgDghAdrvbU1x-gks3m-6il6W1msA3NZNLdenYd3_Rutcfog6h-saoTqpuFp1YdYl9vhXeBUD-Axa-L1xDjSpqucpnokjPA_Dr4Ci2BNn4jBNNUuCo_yRTEevqbeuA-FWmbH8ABMr_OHKC2eHxkd_XsHh1rHKnJ5dXuv3IYa3_yI1zPdYJaiq1_6BY10HWNGp_vn8KLntBjSgdflVaIw"
            />
            {/* Floating Trust Card */}
            <div className={styles.trustCardWrapper}>
              <div className={styles.trustCard}>
                <div className={styles.trustCardHeader}>
                  <div className={styles.trustIcon}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <span className={styles.trustTitle}>On-Site Guarantee</span>
                </div>
                <p className={styles.trustCardDesc}>
                  Your hard drive never leaves your driveway. 100% privacy maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios Section: Tonal Layering Cards */}
        <section className={styles.scenariosSection}>
          <div className={styles.scenariosContainer}>
            <div className={styles.scenariosHeader}>
              <h2>When Tech Goes Quiet, We Listen</h2>
              <p>Common situations where we restore your peace of mind.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">lock_reset</span>
                </div>
                <h3 className={styles.scenarioTitle}>Locked Out</h3>
                <p className={styles.scenarioDesc}>
                  Forgotten passwords or encrypted drives holding your memories hostage? We safely bypass locks without risking your data.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">power_off</span>
                </div>
                <h3 className={styles.scenarioTitle}>PC Won't Turn On</h3>
                <p className={styles.scenarioDesc}>
                  Blank screens and silent fans don't mean your files are gone. We extract data directly from the internal hardware.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3 className={styles.scenarioTitle}>Corrupted Files</h3>
                <p className={styles.scenarioDesc}>
                  If files are "unreadable" or "damaged," our deep-sector scanning tools can stitch your history back together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section: The Pill Geometry */}
        <section id="process" className={styles.processSection}>
          <div className={styles.processContainer}>
            <div>
              <h2 className={styles.processTitle}>
                Simple Recovery,<br />Professional Care.
              </h2>
              <div className={styles.processSteps}>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.darkBg}`}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Book Appointment</h4>
                    <p>Select a time that fits your schedule. No more waiting at generic repair shops.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.accentBg}`}>2</div>
                  <div className={styles.stepContent}>
                    <h4>We Arrive at Your Curb</h4>
                    <p>Our Mobile Work Center pulls up. We handle everything inside our climate-controlled lab.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={`${styles.stepNumber} ${styles.darkBg}`}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Problem Solved</h4>
                    <p>Verify your files on the spot. We hand back your data on a secure, encrypted drive.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.processVisual}>
              <img
                alt="The Recovery Process"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjz1XI6sfnpQS0_zRhP909ytMB7cBy40GHxWsL6j0EJyhEP0gpYsUo3b3o1_i2Yt2bbRrdz726h83nZKY20rKYSnRDwc03aypahYHEsadOgMLjukllB5jP4XaB358pr8wBmhH6-4GpnGUHkCmx0_tnBuzb-DYc8tAN4hJ8pJ0HxbJNj5sw5wLvWXD6uMXEmbmo9lalZUUk9DSBRTjdj3fAl_g9WAF6YQoBy_CKMj_1lFn6eZI2kTzClpLsHdk1vrMVrJ07AbLgTFFY"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section: Warm Styling */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h4>Is there a diagnostic fee?</h4>
                <p>We believe in honesty first. If we can't find a path to recovery, you don't pay a dime for the evaluation.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>How long does it take?</h4>
                <p>Most curb-side recoveries are completed within 2 to 4 hours. Complex logical repairs may take slightly longer.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Can you recover deleted photos?</h4>
                <p>Absolutely. As long as the data hasn't been overwritten by new files, we can typically rescue deleted memories.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>What about privacy?</h4>
                <p>Your privacy is our core value. Our technicians are vetted professionals, and your data never leaves your property.</p>
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
