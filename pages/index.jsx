import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import townStyles from '@/styles/Town.module.scss';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('@/components/AppointmentModal'), { ssr: false });
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import EmergencySection from '@/components/EmergencySection';

const towns = [
  "Barrington", "Algonquin", "McHenry", "Crystal Lake", "Elgin",
  "Carpentersville", "Arlington Heights", "Buffalo Grove", "Des Plaines", "Evanston",
  "Glenview", "Highland Park", "Lake Forest", "Libertyville", "Mount Prospect",
  "Northbrook", "Palatine", "Park Ridge", "Schaumburg", "Skokie",
  "Wheeling", "Wilmette", "Winnetka", "Gilberts", "Pingree Grove",
  "Hampshire", "South Elgin", "West Dundee", "Lake in the Hills", "Hoffman Estates"
].sort();

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Professional Data Recovery | Curb to Cloud Tech</title>
        <meta name="description" content="We extract and rescue files from locked, crashed, or dead PCs and Macs right at your curb. No Data, No Fee guarantee." />
      </Head>

      <main className={styles.mainContent}>
        <section className="section-hero">
          <div className="width-container">
            <div className="hero-grid">
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleHighlight}>Professional Data Recovery:</span> We Rescue Your Files at Your Front Door or via Secure Pick-Up.
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
                  Locked out of your PC? Computer won't turn on? Don't panic. Our "No Data, No Fee" guarantee means you only pay when we successfully retrieve your files.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-large" onClick={() => setIsModalOpen(true)}>
                    Get Files Back
                  </button>
                  <button className="btn btn-secondary btn-large" onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}>
                    Learn Our Process
                  </button>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <Image
                  className={styles.heroImage}
                  alt="girl locked out of a computer"
                  src="/images/tech-support-hero.jpg"
                  width={800}
                  height={600}
                  priority
                />
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
            </div>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="width-container">
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: '#002046' }}>Can We Help You?</h2>
              <p style={{ color: '#44474e' }}>We specialize in rescuing files from crashed, broken, locked, or unbootable PCs and Macs. If your data is trapped inside a problem computer, we retrieve it safely.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">lock_reset</span>
                </div>
                <h3 className={styles.scenarioTitle}>Forgotten Password</h3>
                <p className={styles.scenarioDesc}>
                  Locked out of your user account or forgot your system password? We safely bypass OS account locks to rescue your photos, documents, and personal files.
                </p>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">power_off</span>
                </div>
                <h3 className={styles.scenarioTitle}>Computer Won't Turn On</h3>
                <p className={styles.scenarioDesc}>
                  Dead power supply or motherboard failure? Blank screens don't mean your data is gone. We connect directly to your internal drive to extract your files.
                </p>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">laptop_chromebook</span>
                </div>
                <h3 className={styles.scenarioTitle}>Blue Screen of Death</h3>
                <p className={styles.scenarioDesc}>
                  Stuck on a blue screen error (BSOD) or fatal system crash? We bypass corrupted operating systems to securely pull all your critical documents.
                </p>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">devices_off</span>
                </div>
                <h3 className={styles.scenarioTitle}>Broken Screen & Hardware</h3>
                <p className={styles.scenarioDesc}>
                  Cracked laptop screen, broken hinges, or damaged body rendering your computer unusable? We safely extract your files directly from the storage media inside.
                </p>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">published_with_changes</span>
                </div>
                <h3 className={styles.scenarioTitle}>OS Boot Loops & Crashes</h3>
                <p className={styles.scenarioDesc}>
                  Failed Windows updates or software corruption trapped in endless reboot loops? We access your files externally without losing a single item.
                </p>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">folder_zip</span>
                </div>
                <h3 className={styles.scenarioTitle}>Missing & Lost Files</h3>
                <p className={styles.scenarioDesc}>
                  Accidentally deleted files or drives prompting you to format? We run specialized extraction tools to rescue your precious photos, tax records, and work files.
                </p>
              </div>
            </div>

            <div className={styles.guaranteeBanner}>
              <div className={styles.guaranteeIcon}>
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <p className={styles.guaranteeText}>
                <strong>No Data, No Fee:</strong> You don't pay a single cent unless we successfully retrieve your files.
              </p>
            </div>

            <div className={styles.locationBanner}>
              <div className={styles.locationIcon}>
                <span className="material-symbols-outlined">home_pin</span>
              </div>
              <p className={styles.locationText}>
                <strong>We Come To You:</strong> In-home file recovery & secure device pick-up with return drop-off directly to your door.
              </p>
            </div>
          </div>
        </section>

        <ProcessSection />

        <PricingSection />

        <EmergencySection />

        <section className="section-padding">
          <div className="width-container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: '#002046' }}>Frequently Asked Questions</h2>
              <p style={{ color: '#44474e' }}>Everything you need to know about our data recovery process.</p>
            </div>
            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>Is there a diagnostic fee?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  We believe in honesty first. Our "No Fix, No Fee" guarantee means if we can't find a path to retrieve your files, you don't pay a single cent.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>What computers and operating systems do you support?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  We support all major desktop PCs, laptops, MacBooks (Intel & Apple Silicon), iMacs, Mac Minis, and All-in-One PCs running Windows (11, 10, 8, 7) or macOS across all brands (Apple, Dell, HP, Lenovo, Microsoft Surface, Samsung, Asus, Acer, Toshiba, and more).
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>What storage media types can you extract files from?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  We extract files from Solid State Drives (SSD), NVMe / PCIe M.2 SSDs, SATA Hard Drives (HDD), USB Flash Media, and SD & MicroSD cards, provided the physical storage component has not suffered internal head or controller chip failure.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>How soon can a technician arrive?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  In most cases, we can schedule a visit within 24-48 hours. For emergency file extraction, we offer priority same-day scheduling when available.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>Do I need to bring my computer to you?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  Never. Our service is designed for your comfort. We come directly to your home or office and can either perform the recovery in your home or safely take your computer back to our lab and return it later.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>Can you recover files if the computer won't turn on?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  Yes. As long as the internal storage drive (SSD or HDD) is healthy, we can extract your files directly from the hardware even if the computer's motherboard or power supply is dead.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>What if the storage drive itself is physically broken?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  If the internal storage drive has suffered a physical hardware failure (such as a head crash or failed controller chip), we do not repair the drive itself. We focus on recovering data from unbootable or locked computers where the storage media is still functional.
                </div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>Do you service mobile devices?</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <div className={styles.faqContent}>
                  We do not service mobile phones or tablets. Our data recovery is focused exclusively on PCs and Macs.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="service-area" className="section-padding bg-light">
          <div className="width-container">
            <div className={townStyles.sectionHeader}>
              <h2 className={townStyles.sectionTitle} style={{ color: '#002046' }}>Serving the Northwest Chicagoland Suburbs</h2>
              <p className={townStyles.sectionDesc} style={{ color: '#44474e' }}>From Crystal Lake to Evanston, we bring professional data recovery services directly to your driveway.</p>
            </div>

            <ul className={townStyles.townsList}>
              {towns.map((town) => {
                const slug = `data-recovery-in-${town.toLowerCase().replace(/\s+/g, '-')}-il`;
                return (
                  <li key={town}>
                    <Link href={`/${slug}`}>{town}</Link>
                  </li>
                );
              })}
            </ul>

            <div className={townStyles.mapContainer}>
              <div className={townStyles.mapOverlap}>
                <div className={townStyles.mapWrapper}>
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=McHenry+County,+IL&output=embed">
                  </iframe>
                </div>
              </div>

              <div className={townStyles.mapInfo} style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 20px 25px -5px rgba(0, 32, 70, 0.04)' }}>
                <div className={townStyles.infoList}>
                  <div className={townStyles.infoItem}>
                    <span className={`material-symbols-outlined ${townStyles.infoIcon}`} style={{ color: '#eb851c' }}>location_on</span>
                    <div>
                      <h4 style={{ color: '#002046', marginBottom: '0.25rem' }}>Local & Reliable</h4>
                      <p style={{ color: '#44474e' }}>Serving over 30 local towns with priority scheduling.</p>
                    </div>
                  </div>
                  <div className={townStyles.infoItem}>
                    <span className={`material-symbols-outlined ${townStyles.infoIcon}`} style={{ color: '#eb851c' }}>time_auto</span>
                    <div>
                      <h4 style={{ color: '#002046', marginBottom: '0.25rem' }}>Fast Response Times</h4>
                      <p style={{ color: '#44474e' }}>Schedule your in-home or pick-up appointment today.</p>
                    </div>
                  </div>
                </div>
                <button className={townStyles.btnCta} style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} onClick={() => setIsModalOpen(true)}>Book Priority Visit</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
