import styles from '@/styles/ServicesSection.module.scss';

export default function Services({ onOpenModal }) {
   return (
      <section id="services" className={styles.servicesSegment}>
         <div className="width-container">
            <div className={styles.sectionHeader}>
               <h2 className={styles.sectionH2}>Precision Care Packages</h2>
               <p className={styles.sectionDesc}>Simplified solutions for your home's digital heart.</p>
            </div>

            <div className={styles.bentoGrid}>
               {/* Package 1 */}
               <div className={styles.serviceCard}>
                  <div className={styles.serviceContent}>
                     <span className={`material-symbols-outlined ${styles.iconOrange}`} style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
                     <div>
                        <h3>Home WiFi Optimization</h3>
                        <p>Eliminate dead zones and buffering. We optimize your WiFi coverage from the garden to the attic.</p>
                     </div>
                     <ul>
                        <li><span className="material-symbols-outlined">check_circle</span> Signal Strength Mapping</li>
                        <li><span className="material-symbols-outlined">check_circle</span> Router & Mesh Setup</li>
                        <li><span className="material-symbols-outlined">check_circle</span> Security Optimization</li>
                     </ul>
                  </div>
                  <button className={styles.btnOutline} onClick={onOpenModal}>Learn More</button>
               </div>

               {/* Package 2 */}
               <div className={`${styles.serviceCard} ${styles.serviceCardPrimary}`}>
                  <div className={styles.serviceContent}>
                     <span className={`material-symbols-outlined ${styles.iconTertiary}`} style={{ fontVariationSettings: "'FILL' 1" }}>settings_backup_restore</span>
                     <div>
                        <h3>Data Recovery</h3>
                        <p>Lost photos or critical files? Our advanced recovery tools find what's missing when others can't.</p>
                     </div>
                     <ul>
                        <li><span className="material-symbols-outlined">verified</span> Deep Drive Scanning</li>
                        <li><span className="material-symbols-outlined">verified</span> Cloud Backup Strategy</li>
                        <li><span className="material-symbols-outlined">verified</span> Encrypted Retrieval</li>
                     </ul>
                  </div>
                  <button className={styles.btnSecondary} onClick={onOpenModal}>Request Recovery</button>
               </div>

               {/* Package 3 */}
               <div className={styles.serviceCard}>
                  <div className={styles.serviceContent}>
                     <span className={`material-symbols-outlined ${styles.iconOrange}`} style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                     <div>
                        <h3>Device Tune-Up</h3>
                        <p>Make your old computer feel new again. We clean, speed up, and protect your digital privacy.</p>
                     </div>
                     <ul>
                        <li><span className="material-symbols-outlined">check_circle</span> Virus & Malware Removal</li>
                        <li><span className="material-symbols-outlined">check_circle</span> Performance Optimization</li>
                        <li><span className="material-symbols-outlined">check_circle</span> Privacy Shield Install</li>
                     </ul>
                  </div>
                  <button className={styles.btnOutline} onClick={onOpenModal}>Learn More</button>
               </div>
            </div>
         </div>
      </section>
   );
}
