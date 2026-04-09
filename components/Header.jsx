import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import AppointmentModal from './AppointmentModal';
import { useState } from 'react';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.navContainer} width-container`}>
          <Link href="/" className={styles.logo}>
            CurbToCloudTech
          </Link>

          <input type="checkbox" id="nav-toggle" className={styles.navToggle} />
          
          <nav className={styles.navMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <div className={styles.navActions}>
              <a href="tel:5551234567" className="btn">Book a Call</a>
              <button className="btn" onClick={() => setIsModalOpen(true)}>Book an Appointment</button>
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
