import Head from 'next/head';
import styles from '@/styles/Services.module.scss';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Hardware & Home Networks",
      description: "From setting up a new router and eliminating Wi-Fi dead zones, to troubleshooting that printer that never seems to work when you need it. We bring reliable connections to your entire home or office.",
      icon: "🔌"
    },
    {
      title: "Websites & E-commerce",
      description: "We build fast, secure, and beautiful websites that help local businesses thrive. Whether it's a simple landing page or a full online store, we handle the design, hosting, and SEO.",
      icon: "🌐"
    },
    {
      title: "AI Agents & Automation",
      description: "Stop doing repetitive tasks. We can build custom AI assistants that answer customer questions 24/7, schedule appointments, and automate data entry down to the minute.",
      icon: "🤖"
    },
    {
      title: "General Tech Support",
      description: "Computer running slow? Need help recovering a password or migrating your data to a new laptop? We provide patient, clear-spoken support for your daily tech headaches.",
      icon: "💻"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services | CurbToCloudTech</title>
        <meta name="description" content="Explore the range of tech services we offer, from home networking to SEO-optimized web design." />
      </Head>

      <div className={styles.servicesPage}>
        <section className={`${styles.headerSection} full-height`}>
          <div className="width-container">
            <h1 className="fade-in">Everything You Need, All in One Place</h1>
            <p className="fade-in">Technology should empower you, not hold you back. Let us handle the complicated parts.</p>
          </div>
        </section>

        <section className={styles.servicesList}>
          <div className="width-container">
            {services.map((svc, idx) => (
              <div key={idx} className={`${styles.serviceRow} fade-in`}>
                <div className={styles.iconWrapper}>
                  {svc.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h2>{svc.title}</h2>
                  <p>{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaBanner}>
          <div className="width-container fade-in text-center">
            <h2>Not sure what you need?</h2>
            <p>Give us a call. We'll give you a straight answer.</p>
            <Link href="tel:5551234567" className="btn">Call Us Now</Link>
          </div>
        </section>
      </div>
    </>
  );
}
