import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} width-container`}>
        <div className={styles.brand}>
          <h3>CurbToCloudTech</h3>
          <p>Your friendly neighborhood tech support.</p>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} CurbToCloudTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
