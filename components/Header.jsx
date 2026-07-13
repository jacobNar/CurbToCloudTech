import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const AppointmentModal = dynamic(() => import('./AppointmentModal'), { ssr: false });
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isDataRecoveryPage = router.pathname === '/datarecovery';

  const processHref = isDataRecoveryPage ? '#process' : '/#process';
  const serviceAreaHref = isDataRecoveryPage ? '#service-area' : '/#service-area';

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

          <input
            type="checkbox"
            id="nav-toggle"
            className={styles.navToggle}
            checked={isMenuOpen}
            onChange={(e) => setIsMenuOpen(e.target.checked)}
          />

          <nav className={styles.navMenu}>
            <div className={styles.navLinks}>
              <Link
                href={processHref}
                className={styles.navLink}
                onClick={() => setTimeout(() => setIsMenuOpen(false), 100)}
              >
                Our Process
              </Link>
              {!isDataRecoveryPage && (
                <Link
                  href="/#pricing"
                  className={styles.navLink}
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 100)}
                >
                  Pricing
                </Link>
              )}
              <Link
                href={serviceAreaHref}
                className={styles.navLink}
                onClick={() => setTimeout(() => setIsMenuOpen(false), 100)}
              >
                Service Area
              </Link>
            </div>

            <div className={styles.navActions}>
              <a href="tel:+18156690629" className={styles.phoneLinkDesktop}>
                Call or text (815) 669-0629
              </a>
              <button
                className={styles.headerBtn}
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                {isDataRecoveryPage ? 'Get Free Quote' : 'Book Now'}
              </button>
            </div>
          </nav>

          <div className={styles.headerRightMobile}>
            <a href="tel:+18156690629" className={styles.phoneLinkMobile} aria-label="call now">
              <span className="material-symbols-outlined">call</span>
            </a>
            <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </header>

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

