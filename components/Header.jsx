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
              <div className={styles.dropdown}>
                <span className={styles.navLink} style={{cursor: 'pointer'}}>Data Recovery ▾</span>
                <div className={styles.dropdownContent}>
                  <Link href="/datarecovery" className={styles.dropdownItem} onClick={() => document.getElementById('nav-toggle').checked = false}>Overview</Link>
                  <Link href="/hdd-recovery" className={styles.dropdownItem} onClick={() => document.getElementById('nav-toggle').checked = false}>Hard Drives (HDD)</Link>
                  <Link href="/ssd-recovery" className={styles.dropdownItem} onClick={() => document.getElementById('nav-toggle').checked = false}>Solid State Drives (SSD)</Link>
                  <Link href="/mac-windows-recovery" className={styles.dropdownItem} onClick={() => document.getElementById('nav-toggle').checked = false}>Apple Mac / Windows</Link>
                  <Link href="/flash-drive-recovery" className={styles.dropdownItem} onClick={() => document.getElementById('nav-toggle').checked = false}>USB / Flash Drives</Link>
                </div>
              </div>
              <Link href="/techsupport" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Tech Support</Link>
              <Link href="/speedup" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Speed Up</Link>
              <Link href="/pricing" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Pricing</Link>
            </div>

            <div className={styles.navActions}>
              <button
                className="btn"
                style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
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
