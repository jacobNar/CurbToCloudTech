import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import townStyles from '@/styles/Town.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('@/components/AppointmentModal'), { ssr: false });
import Services from '@/components/Services';

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <Head>
            <title>Curb to Cloud Tech | Peace of Mind Support</title>
            <meta name="description" content="Stop fighting your tech. I’ll come to you and make it work—guaranteed." />
         </Head>

         <div className={styles.homeContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
               <div className={`${styles.twoColGrid} width-container fade-in`}>
                  <div className={styles.heroLeft}>
                     <h1 className={styles.heroH1}>
                        Stop fighting your tech. We’ll come to you and make it work—guaranteed.
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
                     <p className={styles.heroText} style={{ margin: "-1rem 0" }}>
                        Technology should serve you, not stress you out. We bring expert, friendly tech support directly to your living room.
                     </p>
                     <div className={styles.heroActions}>
                        <button onClick={() => setIsModalOpen(true)}>Book Tech Support</button>
                        <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                           View Our Services
                           <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                     </div>
                  </div>

                  <div className={styles.heroRight}>
                     <div className={styles.heroImageContainer}>
                        <Image
                           className={styles.heroMainImg}
                           alt="A friendly male technician in a professional polo shirt smiling and helping an elderly woman with her laptop in a bright modern living room"
                           src="/images/tuneup.png"
                           width={800}
                           height={600}
                           priority
                        />
                        <div className={styles.trustCard}>
                           <div className={styles.trustIcon}>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                           </div>
                           <div>
                              <p className={styles.trustTitle}>Peace of Mind</p>
                              <p className={styles.trustSubtitle}>No Fix, No Fee Guarantee</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Service Packages Component */}
            <Services onOpenModal={() => setIsModalOpen(true)} />

            {/* FAQ Section */}
            <section className={styles.faqSegment}>
               <div className="width-container fade-in">
                  <div className={styles.sectionHeader}>
                     <h2 className={styles.sectionH2}>Common Questions</h2>
                     <p className={styles.sectionDesc}>Everything you need to know before your visit.</p>
                  </div>
                  <div className={styles.faqList}>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqSummary}>
                           <span>What happens if you can't fix my problem?</span>
                           <span className="material-symbols-outlined">expand_more</span>
                        </summary>
                        <div className={styles.faqContent}>
                           Our "No Fix, No Fee" guarantee means if we can't solve your primary technical issue, you don't pay a cent for the service visit.
                        </div>
                     </details>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqSummary}>
                           <span>How soon can a technician arrive?</span>
                           <span className="material-symbols-outlined">expand_more</span>
                        </summary>
                        <div className={styles.faqContent}>
                           In most cases, we can schedule a visit within 24-48 hours. For emergency data recovery, we offer priority same-day scheduling when available.
                        </div>
                     </details>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqSummary}>
                           <span>Do I need to bring my computer to you?</span>
                           <span className="material-symbols-outlined">expand_more</span>
                        </summary>
                        <div className={styles.faqContent}>
                           Never. Our service is designed for your comfort. We come directly to your home or office to solve tech problems where they happen.
                        </div>
                     </details>
                  </div>
               </div>
            </section>

            {/* Global Service Area Wrapper */}
            <section className={townStyles.serviceAreaSection} style={{ backgroundColor: '#f4f3f7', marginTop: '0', paddingBottom: '4rem', paddingTop: '4rem' }}>
              <div className="width-container fade-in">
                <div className={townStyles.sectionHeader}>
                  <h2 className={townStyles.sectionTitle} style={{ color: '#002046' }}>Serving the Northwest Chicagoland Suburbs</h2>
                  <p className={townStyles.sectionDesc} style={{ color: '#44474e' }}>From Crystal Lake to Evanston, we bring elite tech support directly to your driveway.</p>
                </div>

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
                          <p style={{ color: '#44474e' }}>Schedule your at-home appointment today.</p>
                        </div>
                      </div>
                    </div>
                    <button className={townStyles.btnCta} style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} onClick={() => setIsModalOpen(true)}>Book Priority Visit</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Action */}
            {/* <section className={styles.ctaSegment}>
               <div className="width-container fade-in">
                  <div className={styles.ctaContainer}>
                     <div className={styles.ctaBgImageContainer}>
                        <Image
                           className={styles.ctaBgImage}
                           alt="Abstract mix"
                           src="/images/networking.png"
                           layout="fill"
                           objectFit="cover"
                        />
                     </div>

                     <div className={styles.ctaContent}>
                        <h2>Ready for a stress-free tech experience?</h2>
                        <p>Join hundreds of families who have reclaimed their digital peace. Book your session today.</p>
                        <div className={styles.ctaActions}>
                           <button className={styles.btnAction} onClick={() => setIsModalOpen(true)}>Book Visit Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section> */}
         </div>

         {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
      </>
   );
}
