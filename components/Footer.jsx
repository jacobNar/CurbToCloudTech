import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandCol}>
          <div className={styles.brandTitle}>Curb to Cloud</div>
          <p>Your friendly neighborhood IT support. Bringing elite technical knowledge and data recovery directly to your curb.</p>
        </div>

        <div className={styles.linkCol}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/datarecovery">Data Recovery</Link></li>
            <li><Link href="/techsupport">Tech Support</Link></li>
            <li><Link href="/devicetuneup">Device Tune-Up</Link></li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </div>

        <div className={styles.connectCol}>
          <h4>Connect</h4>
          <div className={styles.socials}>
            {/* <a href="#" aria-label="Share">
              <span className="material-symbols-outlined">share</span>
            </a> */}
            <a href="mailto:curbtocloudtech@gmail.com" aria-label="Email">
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
