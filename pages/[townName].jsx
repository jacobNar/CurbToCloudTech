import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Town.module.scss';
import dynamic from 'next/dynamic';
const AppointmentModal = dynamic(() => import('../components/AppointmentModal'), { ssr: false });
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
import EmergencySection from '../components/EmergencySection';
import { useState } from 'react';

const towns = [
  "McHenry", "Crystal Lake", "Algonquin", "Elgin", "Carpentersville",
  "Arlington Heights", "Buffalo Grove", "Des Plaines", "Evanston", "Glenview",
  "Highland Park", "Lake Forest", "Libertyville", "Mount Prospect", "Northbrook",
  "Palatine", "Park Ridge", "Schaumburg", "Skokie", "Wheeling", "Wilmette",
  "Winnetka", "Gilberts", "Pingree Grove", "Hampshire", "South Elgin",
  "West Dundee", "Lake in the Hills", "Barrington", "Hoffman Estates"
];

export async function getStaticPaths() {
  const paths = towns.map(town => ({
    params: { townName: `data-recovery-in-${town.toLowerCase().replace(/\s+/g, '-')}-il` }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.townName;
  const extracted = slug.replace('data-recovery-in-', '').replace('-il', '');
  const townNameFormatted = towns.find(t => t.toLowerCase().replace(/\s+/g, '-') === extracted) || extracted;

  const uniqueFeatures = [
    `Bringing reliable data recovery and file extraction services directly to the bustling neighborhoods of ${townNameFormatted}.`,
    `We love serving the ${townNameFormatted} community with top-tier data recovery solutions, from unbootable laptops to locked hard drives.`,
    `Whether you run a small business or have a home office in ${townNameFormatted}, we can safely extract your photos, files, and documents when systems crash.`,
    `Providing peace of mind through expert, neighborly data recovery support for the residents and local shops of ${townNameFormatted}.`
  ];
  const featureText = uniqueFeatures[townNameFormatted.length % uniqueFeatures.length];

  return {
    props: {
      townName: townNameFormatted,
      state: "Illinois",
      featureText,
      slug
    }
  };
}

export default function TownPage({ townName, state, featureText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{`Professional Data Recovery Services in ${townName}, ${state} | Curb to Cloud Tech`}</title>
        <meta name="description" content={`Expert data recovery and file extraction from locked or crashed PCs and Macs in ${townName}, ${state}. No Data, No Fee guarantee.`} />
      </Head>

      <main className={styles.mainContent}>
        <section className="section-hero">
          <div className="width-container">
            <div className="hero-grid">
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  Professional Data Recovery in {townName}. We Rescue Your Files.
                </h1>
                <p className={styles.heroDesc}>
                  Locked out or computer won't turn on? We recover your files right in your home, at your curb, or via secure device pick-up in {townName}.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-large" onClick={() => setIsModalOpen(true)}>
                    Get Files Back
                  </button>
                  <button className="btn btn-secondary btn-large" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                    View Pricing
                  </button>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.cardOverlap}>
                  <div className={styles.cardBg}></div>
                  <div className={styles.trustCard}>
                    <div className={styles.cardImgWrapper}>
                      <Image alt="friendly data recovery services" src="/images/tech-support-hero.jpg" width={800} height={600} priority />
                    </div>
                    <div className={styles.reviewContent}>
                      <div className={styles.stars}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                      <p className={styles.quote}>"It was refreshingly effortless"</p>
                      <p className={styles.author}>— Barb Sorensen, Palatine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="width-container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Professional Data Recovery in Your Neighborhood</h2>
              <p className={styles.sectionDesc}>From the town square to the suburbs of {townName}, we offer convenient in-home service, curb-side recovery, and secure device pick-up and return.</p>
            </div>

            <ul className={styles.townsList}>
              {[...towns].sort().map((town) => {
                const slug = `data-recovery-in-${town.toLowerCase().replace(/\s+/g, '-')}-il`;
                return (
                  <li key={town}>
                    <Link href={`/${slug}`}>{town}</Link>
                  </li>
                );
              })}
            </ul>

            <div className={styles.mapContainer}>
              <div className={styles.mapOverlap}>
                <div className={styles.mapWrapper}>
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(townName + ', ' + state)}&output=embed`}>
                  </iframe>
                </div>
                <div className={styles.mapTint}></div>
              </div>

              <div className={styles.mapInfo}>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={`material-symbols-outlined ${styles.infoIcon}`}>location_on</span>
                    <div>
                      <h4>Local & Reliable</h4>
                      <p>Serving the entire {townName} area with same-day appointments.</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={`material-symbols-outlined ${styles.infoIcon}`}>verified</span>
                    <div>
                      <h4>Flat-Rate Pricing</h4>
                      <p>Know exactly what you'll pay before we even start. No hidden hourly fees.</p>
                    </div>
                  </div>
                </div>
                <button className={styles.btnOutline} onClick={() => setIsModalOpen(true)}>Book Appointment</button>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        <PricingSection />

        <EmergencySection />

        <section className="section-padding">
          <div className="width-container">
            <div className={styles.trustGrid}>
              <div className={styles.trustBanner}>
                <h2>No Data, No Fee Guarantee</h2>
                <p>You shouldn't pay for data recovery that doesn't succeed. If we can't retrieve your critical files, you don't owe us a dime. Simple as that.</p>
              </div>

              <div className={styles.trustBoxPrimary}>
                <span className="material-symbols-outlined">home</span>
                <h4>{townName} Neighbor</h4>
                <p>Not a big box store or a corporate call center.</p>
              </div>

              <div className={styles.trustBoxSecondary}>
                <span className="material-symbols-outlined">payments</span>
                <h4>Flat Rates</h4>
                <p>Transparent pricing. No surprises on your final bill.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="width-container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaBlurWrapper}>
                <div className={styles.ctaBlurCircle}></div>
              </div>
              <div className={styles.ctaContent}>
                <h2>Ready to rescue your files once and for all?</h2>
                <p>Appointments are available as soon as tomorrow in {townName}. Let's get your important memories and files back.</p>
                <button className={styles.btnCta} onClick={() => setIsModalOpen(true)}>Schedule Your Visit Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && <AppointmentModal autoTown={townName} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
