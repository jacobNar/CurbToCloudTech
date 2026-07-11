import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import townStyles from '@/styles/Town.module.scss';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('@/components/AppointmentModal'), { ssr: false });
import LeadCTASection from '@/components/LeadCTASection';
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

export default function DataRecovery() {
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
              <h2 style={{ color: '#002046' }}>What We Do</h2>
              <p style={{ color: '#44474e' }}>We specialize in extracting and recovering files from crashed, locked, or unbootable PCs and Macs. Whether it’s a forgotten password or a computer that won't turn on, we retrieve your data safely in your home, at your curb, or via secure device pick-up and return.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">lock_reset</span>
                </div>
                <h3 className={styles.scenarioTitle}>Locked Out</h3>
                <p className={styles.scenarioDesc}>
                  Forgotten passwords or locked operating systems holding your memories hostage? We safely bypass account locks to retrieve your files without risking your data.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">power_off</span>
                </div>
                <h3 className={styles.scenarioTitle}>PC Won't Turn On</h3>
                <p className={styles.scenarioDesc}>
                  Blank screens and silent fans don't mean your files are gone. As long as the internal storage is healthy, we can extract your data directly from the hardware.
                </p>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3 className={styles.scenarioTitle}>Operating System Crashes</h3>
                <p className={styles.scenarioDesc}>
                  If system updates or software failures leave your computer in a boot loop, we bypass the corrupted operating system to pull your files.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="width-container">
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: '#002046' }}>Supported Computers & Systems</h2>
              <p style={{ color: '#44474e' }}>We specialize in extracting files from unbootable, dead, or locked computers, retrieving your files directly from their internal storage.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">devices</span>
                </div>
                <h3 className={styles.scenarioTitle}>Supported Computers</h3>
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8', color: '#44474e' }}>
                  <li>• Desktop PCs</li>
                  <li>• Laptops & Notebooks</li>
                  <li>• MacBooks (Intel & Apple Silicon)</li>
                  <li>• iMacs & Mac Minis</li>
                  <li>• All-in-One PCs</li>
                </ul>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <h3 className={styles.scenarioTitle}>Storage We Extract From</h3>
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8', color: '#44474e' }}>
                  <li>• Solid State Drives (SSD)</li>
                  <li>• NVMe / PCIe M.2 SSDs</li>
                  <li>• SATA Hard Drives (HDD)</li>
                  <li>• USB Flash Media</li>
                  <li>• SD & MicroSD Cards</li>
                  <li>• (Note: Storage media must be functional)</li>
                </ul>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">laptop_windows</span>
                </div>
                <h3 className={styles.scenarioTitle}>Systems & Brands</h3>
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8', color: '#44474e' }}>
                  <li>• Windows (11, 10, 8, 7) & macOS</li>
                  <li>• Apple, Dell, HP, Lenovo</li>
                  <li>• Microsoft Surface</li>
                  <li>• Samsung, WD, Seagate</li>
                  <li>• Crucial, SanDisk, Toshiba</li>
                  <li>• And many more...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        <LeadCTASection onBookClick={() => setIsModalOpen(true)} />

        <EmergencySection />

        <section className="section-padding">
          <div className="width-container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: '#002046' }}>Frequently Asked Questions</h2>
              <p style={{ color: '#44474e' }}>Everything you need to know about our curb-side data recovery process.</p>
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
                  Never. Our service is designed for your comfort. We come directly to your home or office to extract files inside our Mobile Work Center at your curb.
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
                <button className={townStyles.btnCta} style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} onClick={() => setIsModalOpen(true)}>Start My Free Evaluation</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
