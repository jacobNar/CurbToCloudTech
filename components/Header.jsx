import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const AppointmentModal = dynamic(() => import('./AppointmentModal'), { ssr: false });
import { useState } from 'react';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-final-v3-square.png"
              alt="Curb to Cloud Tech Logo"
              width={250}
              height={250}
              className={styles.logoImage}
              priority
            />
          </Link>

          <input type="checkbox" id="nav-toggle" className={styles.navToggle} />

          <nav className={styles.navMenu}>
            <div className={styles.navLinks}>
              <Link href="/#process" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Our Process</Link>
              <Link href="/#pricing" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Pricing</Link>
              <Link href="/#service-area" className={styles.navLink} onClick={() => document.getElementById('nav-toggle').checked = false}>Service Area</Link>
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
