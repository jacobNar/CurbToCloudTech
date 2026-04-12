import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';
import Services from '../components/Services';
import styles from '@/styles/Town.module.scss';
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
    params: { townName: `tech-support-in-${town.toLowerCase().replace(/\s+/g, '-')}-il` }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.townName;
  const extracted = slug.replace('tech-support-in-', '').replace('-il', '');
  const townNameFormatted = towns.find(t => t.toLowerCase().replace(/\s+/g, '-') === extracted) || extracted;

  const uniqueFeatures = [
    `Bringing reliable IT support and home network setups directly to the bustling neighborhoods of ${townNameFormatted}.`,
    `We love serving the ${townNameFormatted} community with top-tier tech solutions, from fixing frustrating Wi-Fi drops to building smart AI agents.`,
    `Whether you run a small business or have a home office in ${townNameFormatted}, we've got your hardware and internet issues covered.`,
    `Providing peace of mind through expert, neighborly tech support for the residents and local shops of ${townNameFormatted}.`
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
        <title>Tech Support & IT Services in {townName}, {state} | CurbToCloudTech</title>
        <meta name="description" content={`Expert tech support, networking, and web design for homes and businesses in ${townName}, ${state}. Friendly, reliable service.`} />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Stop fighting your tech. I'll come to you.
              </h1>
              <p className={styles.heroDesc}>
                Expert, friendly IT support for your {townName} home. Whether it's a broken drive or patchy WiFi, I make it work—guaranteed.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>
                  Schedule Your Visit
                </button>
                <button className={styles.btnSecondary} onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}>
                  View Pricing
                </button>
              </div>
              <div className={styles.trustSignals}>
                <div className={styles.avatars}>
                  <div className={styles.avatarImgWrapper}>
                    <img alt="technician" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-NtBlGu7OOeAydWEgAajq-Y5AXVUvGkH0fBD5AYqYUhmBRbZNAVsPrKn9BgsuJCrP5XYHQYhfv5GXTkimIaEKoTP-9Ec9su0N_l8xMyVQcFaFAdmrAiZ8fIPzAbQENdR9QTAjdv736t9qz57ENuOmmPAhWZNwi2qsPXQ1SBvH_yix40gtAf2gPN-tafEjGcT4UzllEsZcTqaQhKcpgF5fwuKjBGsZhEwaaVQNYpqllvH4W2FKZnGofixo-luCY34KaKDv4Oaths5" />
                  </div>
                  <div className={styles.ratingBadge}>4.9</div>
                </div>
                <span>Your local IT professionals in {townName}</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.cardOverlap}>
                <div className={styles.cardBg}></div>
                <div className={styles.trustCard}>
                  <div className={styles.cardImgWrapper}>
                    <img alt="friendly tech support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvtLPBy5w2987doVa1LuRc2qE7Nha6RtTkRJ9GjI-u8L-5Tsl9dy1srMdMUsxLA7xj_RYe93kl5p5vv-AufPiFtcuHwwS0__DSea-evgxZDS9Gs1i1Ud9yVYoriMaaMKlA0QDy37PGZ3JxcyRT8WhjynPz3XxRUqdHSfR1ltcVP2FRElKq0N5ZL88CcFKzl5e82oMvKfQaq1YmK-4KSvAvJO69iR1P8TddQutaPt04Xhjq9Q0P-8YCN2D2ZluwJ3B4z965QMubYtbN" />
                  </div>
                  <div className={styles.reviewContent}>
                    <div className={styles.stars}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className={styles.quote}>"Finally, someone who explains tech in plain English and fixed my internet in minutes!"</p>
                    <p className={styles.author}>— Sarah J., {townName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Wrapper */}
        <section className={styles.serviceAreaSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Friendly Tech Support in Your Neighborhood</h2>
            <p className={styles.sectionDesc}>From the town square to the suburbs, I'm just a short drive away.</p>
          </div>

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
                    <p>Know exactly what you'll pay before I even start. No hidden hourly fees.</p>
                  </div>
                </div>
              </div>
              <button className={styles.btnOutline} onClick={() => setIsModalOpen(true)}>Check My Zip Code</button>
            </div>
          </div>
        </section>

        {/* Packages Component Wrapper */}
        <Services onOpenModal={() => setIsModalOpen(true)} />

        {/* Trust Signals */}
        <section className={styles.trustSection}>
          <div className={styles.trustGrid}>
            <div className={styles.trustBanner}>
              <h2>No Fix, No Fee Guarantee</h2>
              <p>You shouldn't pay for technology that doesn't work. If I can't find a solution for your technical issue, you don't owe me a dime. Simple as that.</p>
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
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBlurWrapper}>
              <div className={styles.ctaBlurCircle}></div>
            </div>
            <div className={styles.ctaContent}>
              <h2>Ready to fix your home tech once and for all?</h2>
              <p>Appointments are available as soon as tomorrow in {townName}. Let's get your digital life back on track.</p>
              <button className={styles.btnCta} onClick={() => setIsModalOpen(true)}>Schedule Your Visit Now</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
