import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>CurbToCloudTech | Your Friendly Neighborhood Tech Support</title>
        <meta name="description" content="Help with hardware, websites, internet issues, home networks, and more!" />
      </Head>

      <div className={styles.homeContainer}>
        {/* Hero Section */}
        <section className={`${styles.hero} full-height`}>
          <div className="width-container">
            <h1 className="fade-in">Technology shouldn't be frustrating.</h1>
            <p className="fade-in">
              From fixing Wi-Fi dropouts to building custom AI agents for your business,
              we bring expert, neighborly support straight to your door or screen.
            </p>
            <div className={`${styles.heroCta} fade-in`}>
              <Link href="/services" className="btn">Explore Our Services</Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.servicesOverview}>
          <div className="width-container">
            <h2 className="fade-in">How We Can Help</h2>
            <div className={styles.serviceGrid}>
              
              <div className={`${styles.serviceCard} fade-in`}>
                <h3>Hardware & Home Networks</h3>
                <p>Dead spots in the house? Printer not cooperating? We'll get everything connected seamlessly.</p>
              </div>

              <div className={`${styles.serviceCard} fade-in`}>
                <h3>Websites & E-commerce</h3>
                <p>Establishing an online presence that reflects the heart of your business.</p>
              </div>

              <div className={`${styles.serviceCard} fade-in`}>
                <h3>AI Agents & Automation</h3>
                <p>Save hours of busywork every week with automated scheduling, answering, and data entry.</p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <div className="width-container">
            <h2 className="fade-in">Ready to make tech work for you?</h2>
            <p className="fade-in">Let's chat. No jargon, just clear solutions.</p>
            <a href="tel:5551234567" className={`btn fade-in ${styles.ctaBtn}`}>Call Us Today</a>
          </div>
        </section>
      </div>
    </>
  );
}
