import Head from 'next/head';
import Link from 'next/link';
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
  // Simple extraction for the display name based on slug
  const extracted = slug.replace('tech-support-in-', '').replace('-il', '');
  const townNameFormatted = towns.find(t => t.toLowerCase().replace(/\s+/g, '-') === extracted) || extracted;
  
  // Generating unique, localized content variation
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
  return (
    <>
      <Head>
        <title>Tech Support & IT Services in {townName}, {state} | CurbToCloudTech</title>
        <meta name="description" content={`Expert tech support, networking, and web design for homes and businesses in ${townName}, ${state}. Friendly, reliable service.`} />
      </Head>

      <div className={styles.townPage}>
        <section className={`${styles.hero} full-height`}>
          <div className="width-container text-center">
            <h1 className="fade-in">Friendly Neighborhood Tech Support in {townName}</h1>
            <p className="fade-in">{featureText}</p>
            <div className="fade-in" style={{ marginTop: '2rem' }}>
              <Link href="tel:5551234567" className="btn">Call for Support in {townName}</Link>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`width-container ${styles.twoCol}`}>
             <div className="fade-in">
               <h2>Why Choose CurbToCloudTech in {townName}?</h2>
               <p>
                 We understand that technology should make your life easier, not more complicated. When your home Wi-Fi drops, your hardware fails, or your business needs a fresh website, having a local partner in {townName} makes all the difference.
               </p>
               <ul>
                 <li>Fast, reliable home visits and remote support</li>
                 <li>Plain English explanations—no confusing jargon</li>
                 <li>Comprehensive services: Networking, Websites, AI Automation</li>
               </ul>
             </div>
             
             <div className={`fade-in ${styles.mapContainer}`}>
               <iframe 
                  width="100%" 
                  height="350" 
                  style={{border:0, borderRadius: '12px'}} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src={`https://www.google.com/maps?q=${encodeURIComponent(townName + ', ' + state)}&output=embed`}>
                </iframe>
             </div>
          </div>
        </section>

        <section className={styles.ctaBanner}>
          <div className="width-container text-center fade-in">
            <h2>Ready to solve your tech headaches?</h2>
            <p>Our team is available to support the {townName} area. Book an online call or an in-person visit.</p>
          </div>
        </section>
      </div>
    </>
  );
}
