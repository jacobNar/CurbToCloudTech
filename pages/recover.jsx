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
        <title>Curb to Cloud | Expert Data Recovery</title>
      </Head>

      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.gridOverlap}>
            <img 
              className={styles.heroBgImage} 
              alt="close-up technical photography of complex microchips" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7dOUQC7yx8c8MnFMfSkU1qtQklWaViTKZLe8L51d86ljgqr-7cMpB9qKeOpJdRXQHK3w4_8pLEi9SVi0WD3KtceOWv6d3oBu0BPKylv4-aDol8xiMXItyOXOMwTFipKxoIOW7paBDFzrQS-Vo-LlINmMwiciiyIdKGlIsGXxzEXnoxEmXtymD2hV0xVWah--pOsN1PcSi3oOgfKSS57Ndxv2oXf799avcAkTdhxvLf-rx1z6cegUhgtOWxjtneRCukfK9TVWBSv8C" 
            />
            <div className={styles.heroBgGradient} />
            <div className={styles.heroContentWrapper}>
              <p className={styles.heroTagline}>Immediate Hardware & Software Extraction</p>
              <h1 className={styles.heroTitle}>
                Expert Data Recovery <br />
                <span className="text-gradient">at Your Doorstep</span>
              </h1>
              <p className={styles.heroDesc}>
                We bring high-performance forensic recovery tools directly to your curb. No shipping, no waiting, no privacy risks. Our mobile lab recovers what others call lost.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>
                  Book Emergency Recovery
                  <span className="material-symbols-outlined">bolt</span>
                </button>
                <button className={styles.heroGlassBtn} onClick={() => document.getElementById('scenarios').scrollIntoView({ behavior: 'smooth' })}>
                  View Service Areas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios Section (Bento Grid) */}
        <section id="scenarios" className={styles.scenariosSection}>
          <div className="width-container">
            <div className={styles.sectionHeader}>
              <p className={styles.label}>Diagnostic Scope</p>
              <h2>When Can We Help?</h2>
            </div>
            
            <div className={styles.scenariosGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.cardIcon}>
                  <span className="material-symbols-outlined">lock_open</span>
                </div>
                <h3 className={styles.cardTitle}>Locked Out</h3>
                <p className={styles.cardDesc}>
                  Forgotten passwords or corrupted BIOS settings blocking access? We bypass local authentication to secure your raw data volumes.
                </p>
                <ul className={styles.cardList}>
                  <li><span className={styles.bullet}></span> Windows/Mac bypass</li>
                  <li><span className={styles.bullet}></span> Encrypted Volume Mount</li>
                </ul>
              </div>

              <div className={`${styles.scenarioCard} ${styles.highlight}`}>
                <div className={styles.cardIcon}>
                  <span className="material-symbols-outlined">skull</span>
                </div>
                <h3 className={styles.cardTitle}>Dead PC</h3>
                <p className={styles.cardDesc}>
                  Total hardware failure, power surge, or water damage. Our mobile lab features ESD-safe extraction for physical drive removal and cloning.
                </p>
                <ul className={styles.cardList}>
                  <li><span className={styles.bullet}></span> NVMe/SSD Forensic Extraction</li>
                  <li><span className={styles.bullet}></span> Logic Board Component Swaps</li>
                </ul>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.cardIcon}>
                  <span className="material-symbols-outlined">folder_zip</span>
                </div>
                <h3 className={styles.cardTitle}>Corrupted Files</h3>
                <p className={styles.cardDesc}>
                  Malware attacks or file system errors. We utilize deep-sector scanning to reconstruct fragmented data and repair broken headers.
                </p>
                <ul className={styles.cardList}>
                  <li><span className={styles.bullet}></span> RAW File Recovery</li>
                  <li><span className={styles.bullet}></span> Database Reconstruction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className={`width-container ${styles.valueSection}`}>
          <div className={styles.valueImgWrapper}>
            <div className={styles.gridOverlap}>
              <img 
                className={styles.valueImgInner} 
                alt="high-tech black mobile service van" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPrONlM4saLGSFc6LygRe9lpBAWl_qz0R-saVpe0xNM_wd6IMPBbjSZnw1u_5oBCTwzYwTdanae4IrJngDoSJup5IBeB6vCP5D3XJ5w_K4d_nro3ZMLdhjug5AO83d3Qk6boBQ9ts2sjd4RPQb0VegGHoaEILz__-7wC3fYGvGjAP-r76r6JPjAVKcbJhKHC6g_8uF95WLWM4x6EPzJzNKvhEcr1CqDeI1qSphAZvd_QVc-vLLOF8bKwgiltmB6A3IF87dBj5e3l42" 
              />
              <div className={styles.valueBadgeInner}>
                <p className={styles.statVal}>98.4%</p>
                <p className={styles.statLabel}>Success Rate</p>
                <p className={styles.statDesc}>On-site hardware extraction and software reconstruction success across all hardware tiers.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.valueContent}>
            <p className={styles.vLabel}>The Mobility Advantage</p>
            <h2>Your Data Never <br/> Leaves Your Sight.</h2>
            
            <div className={styles.featureBlock}>
              <div className={styles.featIcon}>
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <div className={styles.featText}>
                <h4>Mobile Work Center</h4>
                <p>Our vehicles are climate-controlled, ESD-protected labs on wheels, equipped with the same logic-gate analysis tools as regional depots.</p>
              </div>
            </div>
            
            <div className={styles.featureBlock}>
              <div className={styles.featIcon}>
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div className={styles.featText}>
                <h4>Zero-Transit Risk</h4>
                <p>Traditional mail-in services risk physical loss or privacy breaches during transit. We eliminate the courier entirely by coming to you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className={styles.timelineSection}>
          <div className="width-container">
            <div className={styles.header}>
              <p className={styles.label}>Operational Protocol</p>
              <h2>Three Steps to Recovery</h2>
            </div>
            
            <div className={styles.timelineGrid}>
              <div className={styles.timelineStep}>
                <div className={styles.iconRing}>
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <h4>1. Book Appointment</h4>
                <p>Select your emergency tier via our portal. A technical specialist confirms your hardware details immediately.</p>
              </div>
              
              <div className={styles.timelineStep}>
                <div className={styles.iconRing}>
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <h4>2. We Arrive</h4>
                <p>Our Mobile Work Center arrives at your location. We perform initial diagnostics right in the driveway.</p>
              </div>
              
              <div className={styles.timelineStep}>
                <div className={styles.iconRing}>
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <h4>3. Doorstep Delivery</h4>
                <p>Once extraction is complete, your data is delivered on a secure drive or synced to your private cloud on the spot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <div className={styles.header}>
              <p className={styles.label}>Technical Queries</p>
              <h2>Frequently Asked</h2>
            </div>
            
            <div className={styles.faqItem}>
              <h4><span className="material-symbols-outlined">smartphone</span> Can you recover data from mobile devices?</h4>
              <p>Yes, we service mobile phones and tablets if they are unlocked and functional enough for forensic software connection. For physical damage to handsets, we perform on-site logic board swaps in our ESD-safe mobile lab.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h4><span className="material-symbols-outlined">hard_drive</span> What types of drives can you recover?</h4>
              <p>Our Mobile Work Centers are equipped for all modern and legacy interfaces, including NVMe/M.2 SSDs, SATA hard drives, SAS enterprise volumes, RAID arrays, and even older IDE/PATA interfaces.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h4><span className="material-symbols-outlined">cloud_download</span> How do I get my data back?</h4>
              <p>We provide several secure handover methods: instant cloning to a provided external drive, transfer to a new encrypted drive we supply, or a high-speed secure sync to your private cloud architecture directly from our vehicle&apos;s network bridge.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.gridOverlap}>
            <div className={styles.heroBgGradient} style={{background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05), transparent 70%)'}} />
            <div className={styles.ctaWrapper}>
              <h2>Data loss isn&apos;t permanent <br/>until you give up.</h2>
              <p>Connect with a retrieval engineer now. No fix, no fee policy applies to all consumer-tier hardware.</p>
              <div className={styles.ctaActions}>
                <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>Initialize Retrieval</button>
                <button className={styles.heroGlassBtn}>Consultation Line</button>
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
