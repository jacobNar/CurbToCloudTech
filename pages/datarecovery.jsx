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
            <h1 className={styles.heroTitle}><span className={styles.heroTitleHighlight}>Professional Data Recovery:</span> We Rescue Your Files at Your Front Door.
            </h1>
            <p className={styles.heroDesc}>
              Lost photos? Deleted documents? Don't panic. Our "No Data, No Fee" guarantee means you only pay when we succeed.
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
                  <span className={styles.trustTitle}>The Guarantee</span>
                </div>
                <p className={styles.trustCardDesc}>
                  If we can't recover your critical files, you don't pay a cent for the recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className={styles.scenariosSection} style={{ backgroundColor: 'var(--primary)', color: 'white', marginTop: '0', paddingBottom: '6rem' }}>
          <div className={styles.scenariosContainer}>
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: 'white' }}>Emergency: What To Do If Your Drive Fails</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Follow these crucial steps to maximize your chances of a successful data rescue.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>1. Stop Using It</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Turn off the device immediately. Continuing to run a failing drive can permanently overwrite data or cause physical damage to the platters.</p>
              </div>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>2. Avoid Software Tools</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Do not run generic disk utility tools or data recovery software. These put extreme stress on failing components and often make recovery impossible.</p>
              </div>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>3. Call The Professionals</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Don't ship your fragile drive across the country. Call us and we will securely perform the recovery right from your driveway.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios Section: Tonal Layering Cards */}
        <section className={styles.scenariosSection}>
          <div className={styles.scenariosContainer}>
            <div className={styles.scenariosHeader}>
              <h2>What We Do</h2>
              <p>We specialize in recovering lost data from crashed, unbootable, or corrupted PCs and Macs. Whether it’s a clicking hard drive or a frozen MacBook, we bring the lab to your living room.</p>
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
                    <h4>How You Get Your Data</h4>
                    <p>Once recovered, we provide your files via a secure download link. Need a physical copy? We can provide a dedicated USB drive for a small additional fee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.processVisual}>
              <img
                alt="The Recovery Process"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSc9kieVsMgfO864cZf2E-E4sYoTj-JneQ0iUUxlGmCRHSwWHoMKuWlIvFdvNO11tSkhStqaUcaZE7a43VQsIyfeDeneeFDXeA1s4-6D8y3mAnbrAgzehOOXn8TRBMXQCR4t53qTtuSPR_8gknGNtDbaHRcNd7dQ1HSPaha-F5qjcFkqOWl9UcLtibJB2BASEkSemsTwudNaPJVNLJav5gmcGINyROvRsrbsdgHwT5PRkj7obwPH221REqtpdTZEntbqvcQrGGqdhG"
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
              <div className={styles.faqCard}>
                <h4>Do you service mobile devices?</h4>
                <p>Note: We do not service mobile phones or tablets. Our data recovery is focused exclusively on PCs and Macs.</p>
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
