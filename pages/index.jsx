import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';
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
                     <div className={styles.heroBadges}>
                        <span className={styles.badgeOne}>
                           <span className="material-symbols-outlined text-sm">verified_user</span>
                           No Fix, No Fee Guarantee
                        </span>
                        <span className={styles.badgeTwo}>
                           <span className="material-symbols-outlined text-sm">home_pin</span>
                           Local & Reliable
                        </span>
                     </div>
                     <h1 className={styles.heroH1}>
                        Stop fighting your tech. We’ll come to you and make it work—guaranteed.
                     </h1>
                     <p className={styles.heroText}>
                        Technology should serve you, not stress you out. We bring expert, friendly tech support directly to your living room.
                     </p>
                     <div className={styles.heroActions}>
                        <button onClick={() => setIsModalOpen(true)}>Book Your Tech Concierge</button>
                        <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                           View Our Services
                           <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                     </div>
                  </div>

                  <div className={styles.heroRight}>
                     <div className={styles.heroImageContainer}>
                        <img
                           className={styles.heroMainImg}
                           alt="A friendly male technician in a professional polo shirt smiling and helping an elderly woman with her laptop in a bright modern living room"
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSc9kieVsMgfO864cZf2E-E4sYoTj-JneQ0iUUxlGmCRHSwWHoMKuWlIvFdvNO11tSkhStqaUcaZE7a43VQsIyfeDeneeFDXeA1s4-6D8y3mAnbrAgzehOOXn8TRBMXQCR4t53qTtuSPR_8gknGNtDbaHRcNd7dQ1HSPaha-F5qjcFkqOWl9UcLtibJB2BASEkSemsTwudNaPJVNLJav5gmcGINyROvRsrbsdgHwT5PRkj7obwPH221REqtpdTZEntbqvcQrGGqdhG"
                        />
                        <div className={styles.trustCard}>
                           <div className={styles.trustIcon}>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_very_satisfied</span>
                           </div>
                           <div>
                              <p className={styles.trustTitle}>Peace of Mind</p>
                              <p className={styles.trustSubtitle}>500+ happy homes served</p>
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

            {/* Final CTA Action */}
            <section className={styles.ctaSegment}>
               <div className="width-container fade-in">
                  <div className={styles.ctaContainer}>
                     <div className={styles.ctaBgImageContainer}>
                        <img
                           className={styles.ctaBgImage}
                           alt="Abstract mix"
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mFQRMjcziT_r8_-G06CIkp8X5qNwoeyPR_QW_4b9K0c3BjDHbYB0ZIWSfagf2lGPfpLCsehyOGa4HFr4V3HqeOrr-QDepzr9-8Hard4uhYWOjJqEM4SCmKKEewcDf7HBmc890kYASeWMPIzMVwUPxVMnFHxUkP9yIixGvlQUC5SbgBaDZ5upXyFEGKq9nbuGzTWkjxp-11HV8ZvarKlYlTlpvd5uUAQhCXlbiCK5yMQ-pjzpVNmBX3HTz9xLULdfet9ERKZdnjHK"
                        />
                     </div>

                     <div className={styles.ctaContent}>
                        <h2>Ready for a stress-free tech experience?</h2>
                        <p>Join hundreds of families who have reclaimed their digital peace. Book your session today.</p>
                        <div className={styles.ctaActions}>
                           <button className={styles.btnAction} onClick={() => setIsModalOpen(true)}>Schedule Your Visit Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
      </>
   );
}
