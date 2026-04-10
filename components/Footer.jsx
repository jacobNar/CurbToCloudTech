import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandCol}>
          <div className={styles.brandTitle}>Curb to Cloud</div>
          <p>Next-generation mobile IT support. Bringing elite technical systems and data recovery directly to your curb.</p>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/recover">Data Recovery</Link></li>
            <li><Link href="/services">WiFi Networking</Link></li>
            <li><Link href="/services">Hardware Repair</Link></li>
            <li><Link href="/services">Cloud Syncing</Link></li>
          </ul>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Support</h4>
          <ul>
            <li><Link href="/services">Terms of Service</Link></li>
            <li><Link href="/services">Privacy Policy</Link></li>
            <li><Link href="/services">On-Site Areas</Link></li>
            <li><Link href="/services">Emergency Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.connectCol}>
          <h4>Connect</h4>
          <div className={styles.socials}>
            <a href="#" aria-label="Share">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Curb to Cloud. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
