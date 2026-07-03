import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Recover.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('../components/AppointmentModal'), { ssr: false });

export default function Recover() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Data Recovery | Curb to Cloud Tech</title>
      </Head>

      <main className={styles.mainContent}>
        {/* Hero Section: Editorial Asymmetry */}
        <section className="section-hero">
          <div className="width-container">
            <div className="hero-grid">
              <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}><span className={styles.heroTitleHighlight}>Professional Data Recovery:</span> We Rescue Your Files at Your Front Door.
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
              src="/images/data-recovery-hero.jpg"
              width={800}
              height={600}
              priority
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
        </div>
      </div>
    </section>

        {/* Scenarios Section: Tonal Layering Cards */}
        <section className="section-padding bg-light">
          <div className="width-container">
            <div className={styles.scenariosHeader}>
              <h2>What We Do</h2>
              <p>We specialize in extracting and recovering files from crashed, locked, or unbootable PCs and Macs. Whether it’s a forgotten password or a computer that won't turn on, we bring the tools to retrieve your data safely at your curb.</p>
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

        {/* Supported Hardware Section */}
        <section className="section-padding bg-light">
          <div className="width-container">
            <div className={styles.scenariosHeader}>
              <h2>Supported Computers & Systems</h2>
              <p>We specialize in extracting files from unbootable, dead, or locked computers, retrieving your files directly from their internal storage.</p>
            </div>

            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioIcon}>
                  <span className="material-symbols-outlined">devices</span>
                </div>
                <h3 className={styles.scenarioTitle}>Supported Computers</h3>
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8' }}>
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
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8' }}>
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
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.8' }}>
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

        {/* Process Section: The Pill Geometry */}
        <section id="process" className="section-padding">
          <div className="width-container">
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
                    <p>Our Mobile Work Center pulls up. We handle everything inside at your curb.</p>
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
              <Image
                alt="The Recovery Process"
                src="/images/tech-support-hero.jpg"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

        {/* Emergency Section */}
        <section className="section-padding bg-primary-theme">
          <div className="width-container">
            <div className={styles.scenariosHeader}>
              <h2 style={{ color: 'white' }}>Important: What to Do If Your Computer Won't Boot</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Follow these crucial steps to protect your files before we arrive.</p>
            </div>
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>1. Do Not Force Reboots</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Repeatedly powering a crashed or unbootable system on and off can corrupt your files. Keep the device powered off.</p>
              </div>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>2. Avoid Factory Resets</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Do not trigger a "system restore" or "factory reset" in an attempt to bypass locks, as this will permanently erase your personal data.</p>
              </div>
              <div className={styles.scenarioCard} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <h3 className={styles.scenarioTitle} style={{ color: 'white' }}>3. Professional Extraction</h3>
                <p className={styles.scenarioDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Call us and we will securely extract the healthy storage drive or bypass the lock to safely retrieve your files from our Mobile Work Center.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section: Warm Styling */}
        <section className="section-padding">
          <div className="width-container">
            <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h4>Is there a diagnostic fee?</h4>
                <p>We believe in honesty first. If we can't find a path to retrieve your files, you don't pay a dime for the evaluation.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>How long does it take?</h4>
                <p>Most curb-side file extractions are completed within 2 to 4 hours. Complex file systems may take slightly longer.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Can you recover files if the computer won't turn on?</h4>
                <p>Yes. As long as the internal storage drive (SSD or HDD) is healthy, we can extract your files directly from the hardware even if the computer's motherboard or power supply is dead.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>What if the storage drive itself is physically broken?</h4>
                <p>If the internal storage drive has suffered a physical hardware failure (such as a head crash or failed controller chip), we do not repair the drive itself. We focus on recovering data from unbootable or locked computers where the storage media is still functional.</p>
              </div>
              <div className={styles.faqCard}>
                <h4>Do you service mobile devices?</h4>
                <p>Note: We do not service mobile phones or tablets. Our data recovery is focused exclusively on PCs and Macs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
