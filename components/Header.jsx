import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import AppointmentModal from './AppointmentModal';
import { useState } from 'react';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Curb to Cloud
          </Link>

          <input type="checkbox" id="nav-toggle" className={styles.navToggle} />

          <nav className={styles.navMenu}>
            <div className={styles.navLinks}>
              <Link href="/datarecovery" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Data Recovery</Link>
              <Link href="/techsupport" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Tech Support</Link>
              <Link href="/devicetuneup" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Device Tune-Up</Link>
              <Link href="/pricing" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Pricing</Link>
            </div>

            <div className={styles.navActions}>
              <button
                className={styles.headerBtn}
                onClick={() => setIsModalOpen(true)}
              >
                Book Now
              </button>
            </div>
          </nav>

          <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
