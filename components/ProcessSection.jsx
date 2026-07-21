import Image from 'next/image';
import styles from '@/styles/Recover.module.scss';

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="width-container">
        <div className={styles.processContainer}>
          <div>
            <h2 className={styles.processTitle}>
              Our Simple 3-Step Process
            </h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={`${styles.stepNumber} ${styles.darkBg}`}>1</div>
                <div className={styles.stepContent}>
                  <h4>Call, Text, or Request Online</h4>
                  <p>Reach out by phone, text us at (815) 669-0629, or submit an online form for a quick callback. We'll discuss your issue and schedule a convenient appointment.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={`${styles.stepNumber} ${styles.accentBg}`}>2</div>
                <div className={styles.stepContent}>
                  <h4>In-Home Service or Lab Pick-Up</h4>
                  <p>We come directly to your location. We can either do the recovery right in your home or take your computer back to our lab and drop your device off later when completed.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={`${styles.stepNumber} ${styles.darkBg}`}>3</div>
                <div className={styles.stepContent}>
                  <h4>Get Files Back & Pay Only on Success</h4>
                  <p>We transfer all your recovered data onto a brand-new USB drive included in the flat rate. With our No Data, No Fee guarantee, you only pay if we successfully rescue your files.</p>
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
