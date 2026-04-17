import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';
import AppointmentModal from '../components/AppointmentModal';

export default function TechSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Home Tech Support & Troubleshooting | Curb to Cloud Tech</title>
      </Head>

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleHighlight}>Residential Tech Support</span> That Actually Makes Sense.
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
              From stubborn printers to "dead zone" Wi-Fi, we fix the frustrations that slow you down.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
                Book Tech Support
              </button>
              <button className={styles.secondaryBtn} onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                See Our Fixes
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              className={styles.heroImage}
              alt="Home Tech Support"
              src="/images/tech-support.png"
              width={800}
              height={600}
              priority
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.scenariosSection}>
          <div className={styles.scenariosContainer}>
            <div className={styles.scenariosHeader}>
              <h2>What We Fix</h2>
              <p>Common frustrations we can solve in a single visit.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <h3 className={styles.scenarioTitle}>Wi-Fi & Networking</h3>
                <p className={styles.scenarioDesc}>
                  We eliminate dead spots, secure your router, and ensure your home network is optimized for streaming and working.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">print</span>
                </div>
                <h3 className={styles.scenarioTitle}>Hardware & Peripheral Setup</h3>
                <p className={styles.scenarioDesc}>
                  We’ll get your new printer, scanner, or smart home devices synced and functional without the headache.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">bug_report</span>
                </div>
                <h3 className={styles.scenarioTitle}>Software Fixes</h3>
                <p className={styles.scenarioDesc}>
                  If an application won't open or keep crashing, we diagnose the conflict and get it running smoothly.
                </p>
              </div>
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
                <p>We believe in honesty first. If we can't find a path to a fix, you don't pay a dime for the evaluation.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>How long does it take?</h4>
                <p>Most curb-side repairs are completed within 1 to 2 hours. Complex software repairs may take slightly longer.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Do I need to buy parts myself?</h4>
                <p>If parts are needed, we can source them for you at transparent prices, or you can purchase them yourself based on our recommendations.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>What about privacy?</h4>
                <p>Your privacy is our core value. Our technicians are vetted professionals, and your data never leaves your property unless requested.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Do you service mobile devices?</h4>
                <p>Note: We do not service mobile phones or tablets. Our tech support is focused exclusively on PCs, Macs, printers and home networks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Hero Visual at bottom */}
        <div className={styles.heroVisualMobile}>
          <Image
            className={styles.heroImage}
            alt="Home Tech Support"
            src="/images/tech-support.png"
            width={800}
            height={600}
          />
        </div>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
