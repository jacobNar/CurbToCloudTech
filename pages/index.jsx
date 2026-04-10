import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Curb to Cloud Tech | Mobile IT & Data Recovery</title>
        <meta name="description" content="Professional mobile tech support for home and small businesses. We bridge the gap between complex hardware and your peace of mind." />
      </Head>

      <div className={styles.homeContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.gridOverlap}>
            {/* Background Image and Gradient */}
            <img 
              className={styles.heroBgImage} 
              alt="Abstract futuristic digital circuit board" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0S_3hSHY0sOUNcAJu_RVXkIn2PZmwYFz2eyOUZZ6xFlO4kbNt7asNgmjq0xKPZrTHjshujtCPLf2oltNvSoFKXEZhvbFATVo3FhtL7H03N0VOxavKaShDz6WZSINKcVDHRRPhzBR3xeWf66KIBnGL0HKVGrx7S6hY74BKGSxm-Ay0rwRXeCAFr3h8yALYDTS6ptilaDRgF4ORZPoWtOCNTMORrHfswwn-ULXdOOjBeTudT-QIg1f647gRUoH7BT1c7zu4siLmKfXa" 
            />
            <div className={styles.heroBgGradient} />
            
            {/* Context Layer */}
            <div className={styles.heroContentWrapper}>
              <div className={`${styles.twoColGrid} width-container fade-in`}>
                <div className={styles.heroLeft}>
                  <span className={styles.heroBadge}>MOBILE IT SOLUTIONS</span>
                  <h1 className={styles.heroH1}>
                    Your Data, <span className="text-gradient">Recovered.</span><br/>We Come to You.
                  </h1>
                  <p className={styles.heroText}>
                    Professional mobile tech support for home and small businesses. We bridge the gap between complex hardware and your peace of mind.
                  </p>
                  <div className={styles.heroActions}>
                    <button className="btn btn-large glow-subtle" onClick={() => setIsModalOpen(true)}>Book Recovery Now</button>
                    <button className="btn-secondary btn-secondary-large" onClick={() => document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })}>View Services</button>
                  </div>
                </div>

                <div className={styles.heroRight}>
                   <div className={styles.heroImageContainer}>
                      <img 
                        className={styles.heroMainImg} 
                        alt="High-tech server room" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0aiuCWTqOg2AA0YTlzI7e6AJ8LJuP9HJPzi8npjdhYbbGRKhjHvwUiY68ovCxIHevwB6_mHuXrNBxZEMZwoZ4nROkYnhUEQqKsUqsNRSU5oYyt0lQ1JzGBRa94nwme1loUjSzRbc3g71AtWfWXvDW_gnWe7V9Fm8GH2hxMc2RffcWrgvXg4vDGGDG1fcA58mI3Z83KGp5vHPWILbK26VnzH_TdcICtMDW4FpJmZuhn55Fwyw4hsCjwXDcmQbwG6qp-0Go_SEqRNUC"
                      />
                      <div className={styles.heroImgOverlay} />
                      
                      <div className={styles.heroFloatingBadgeStack}>
                         <div className={styles.heroFloatingBadge}>
                            <div className={styles.badgeContent}>
                               <div className={styles.badgeIcon}>
                                  <span className="material-symbols-outlined">verified_user</span>
                               </div>
                               <div>
                                  <p className={styles.badgeTitle}>Success Rate</p>
                                  <p className={styles.badgeValue}>99.4%</p>
                               </div>
                            </div>
                         </div>
                         <div className={styles.heroFloatingBadge}>
                            <div className={styles.badgeContent}>
                               <div className={styles.badgeIcon}>
                                  <span className="material-symbols-outlined">money_off</span>
                               </div>
                               <div>
                                  <p className={styles.badgeTitle}>Guarantee</p>
                                  <p className={styles.badgeValue}>No Data, No Fee</p>
                               </div>
                            </div>
                         </div>
                         <div className={styles.heroFloatingBadge}>
                            <div className={styles.badgeContent}>
                               <div className={styles.badgeIcon}>
                                  <span className="material-symbols-outlined">engineering</span>
                               </div>
                               <div>
                                  <p className={styles.badgeTitle}>Certified</p>
                                  <p className={styles.badgeValue}>Local Experts</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locked Out Features */}
        <section className={styles.lockedSegment}>
          <div className={`${styles.lockedGrid} width-container fade-in`}>
             <div className={styles.lockedImageContainer}>
                <img 
                  className={styles.lockedImg} 
                  alt="Technician working" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2bVPiZk3Az6UhxJqSk3oKx21cK_I9J4KwqUV4hIDpwrvNAUsl8L56JQUtjWkfJtq-_tQHnU-NO71L5L0rHENXu-5h4bQbHHcB_Ig3naIvQ6LldaMI1n4uNmNWKB8zyhX0-vE1p3PR7zx6M8w8UzffO5cgTom-sRnZXtXX6Pe6lh4tP-oqnRFOg-T49wxUs0FexB4kc4QjIyj0RhWzUyc-pEZmQA5O2e9_tJeI3t4-MPupnWtwqSMG5sjAWho0IA8pyqhSpV0l_qu"
                />
                <div className={styles.lockedImgGradient} />
                <div className={styles.lockedIcon}>
                   <span className="material-symbols-outlined">lock_open</span>
                </div>
             </div>
             
             <div className={styles.lockedContent}>
                <h2>Locked Out?</h2>
                <p className={styles.subtitle}>Can't get into your old computer?</p>
                <p className={styles.desc}>
                   We specialize in bypass and data extraction from locked legacy systems. We can get your photos, videos, and files back even if you forgot the password. No judgment, just results.
                </p>
                <ul>
                   <li>
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>Windows & Mac Password Reset</span>
                   </li>
                   <li>
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>Dead Motherboard Data Recovery</span>
                   </li>
                   <li>
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>Corrupted File Restoration</span>
                   </li>
                </ul>
             </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="expertise" className={styles.bentoSegment}>
           <div className="width-container">
              <div className={styles.sectionHeader}>
                 <span className={styles.label}>Our Expertise</span>
                 <h2>Technical Precision. Mobile Convenience.</h2>
              </div>
              <div className={`${styles.threeColGrid} fade-in`}>
                 <div className={styles.bentoCard}>
                    <div className={`${styles.iconBox} ${styles.primary}`}>
                       <span className="material-symbols-outlined">wifi_tethering</span>
                    </div>
                    <h3>WiFi Troubleshooting</h3>
                    <p>Dead zones, buffering, or constant drops? We optimize your network for maximum speed and coverage across your home or office.</p>
                 </div>
                 <div className={styles.bentoCard}>
                    <div className={`${styles.iconBox} ${styles.secondary}`}>
                       <span className="material-symbols-outlined">build</span>
                    </div>
                    <h3>Hardware Repair</h3>
                    <p>From cracked screens to failing power supplies, we handle physical repairs for laptops, desktops, and peripherals right at your doorstep.</p>
                 </div>
                 <div className={styles.bentoCard}>
                    <div className={`${styles.iconBox} ${styles.primaryCont}`}>
                       <span className="material-symbols-outlined">support_agent</span>
                    </div>
                    <h3>Basic IT Support</h3>
                    <p>Printer setup, software updates, or general tech confusion. We provide patient, clear guidance to get your tools working for you again.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* How it works */}
        <section className={styles.processSegment}>
           <div className="width-container">
              <div className={`${styles.processHeaderWrapper} fade-in`}>
                 <div>
                    <span className="text-on-surface-variant font-headline" style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Process</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Three Steps to Peace of Mind</h2>
                 </div>
              </div>
              
              <div className={`${styles.threeColGrid} fade-in`}>
                 <div className={styles.processStep}>
                    <div className={styles.stepNum}>01</div>
                    <h4>Book Online</h4>
                    <p>Select your service and choose a time that fits your schedule. Our automated system handles the rest.</p>
                 </div>
                 <div className={styles.processStep}>
                    <div className={styles.stepNum}>02</div>
                    <h4>We Arrive</h4>
                    <p>A certified technician arrives at your location with all the tools necessary to diagnose and fix the issue.</p>
                 </div>
                 <div className={styles.processStep}>
                    <div className={styles.stepNum}>03</div>
                    <h4>Problem Solved</h4>
                    <p>We ensure everything is working perfectly and you're satisfied before we leave. Instant digital receipts.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialsSegment}>
           <div className={`${styles.twoColGrid} width-container fade-in`}>
              <div className={styles.testiLeft}>
                 <div className={styles.quoteIcon}>
                    <span className="material-symbols-outlined">format_quote</span>
                 </div>
                 <h2>Trust Built on Reliable Service</h2>
                 <p>Our customers value speed, expertise, and the convenience of home-delivered IT support.</p>
              </div>
              
              <div className={styles.testiRight}>
                 <div className={`${styles.testiCard} ${styles.borderPrimary}`}>
                    <p className={styles.quoteText}>"I thought I lost 10 years of family photos when my old hard drive crashed. Curb to Cloud recovered everything in one afternoon. Absolute lifesavers!"</p>
                    <div className={styles.author}>
                       <div className={styles.avatar} />
                       <div className={styles.info}>
                          <p>Sarah Jenkins</p>
                          <p>Home Business Owner</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className={`${styles.testiCard} ${styles.borderSecondary}`}>
                    <p className={styles.quoteText}>"Efficient, professional, and explain things in a way that makes sense. No more lugging my desktop to a mall repair shop."</p>
                    <div className={styles.author}>
                       <div className={styles.avatar} />
                       <div className={styles.info}>
                          <p>Mark Thompson</p>
                          <p>Retired Professor</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA Action */}
        <section className={styles.ctaSegment}>
           <div className="width-container">
              <div className={styles.ctaContainer}>
                 <div className={styles.ctaBgGradient} />
                 
                 <div className={styles.ctaContent}>
                    <h2>Ready to restore your tech?</h2>
                    <p>Book your local expert today and get back to what matters most.</p>
                    <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
                       <button className="btn btn-large glow-subtle" onClick={() => setIsModalOpen(true)}>Book Your Session</button>
                       <button className="btn-secondary btn-secondary-large" onClick={() => document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })}>Contact Support</button>
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
