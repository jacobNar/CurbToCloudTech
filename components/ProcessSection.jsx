import Image from 'next/image';
import styles from '@/styles/Recover.module.scss';

export default function ProcessSection() {
  return (
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
                  <h4>Curb-side or In-Home Service</h4>
                  <p>We arrive at your location. We can either come inside your home to recover the data right away, or securely take your device back to our lab and return it to you once completed.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={`${styles.stepNumber} ${styles.darkBg}`}>3</div>
                <div className={styles.stepContent}>
                  <h4>How You Get Your Data</h4>
                  <p>Once recovered, we pre-load all your files onto a brand new, dedicated USB drive—fully included in the flat rate. No storage limits or download waits.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.processVisual}>
            <Image
              alt="The Recovery Process"
              src="/images/data-transfer.jpg"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
