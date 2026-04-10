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
               <Link href="/recover" className={styles.navLink}>Recovery</Link>
               <Link href="/services" className={styles.navLink}>Services</Link>
               <Link href="/services" className={styles.navLink}>Process</Link>
               <Link href="/services" className={styles.navLink}>Support</Link>
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
