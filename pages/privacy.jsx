import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Legal.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalPage}>
      <Head>
        <title>Privacy Policy | Curb to Cloud Tech</title>
        <meta name="description" content="Privacy Policy for Curb to Cloud Tech. Understand how we collect, use, and protect your information, including Google API user data." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: July 2, 2026</p>
        </header>

        <div className={styles.card}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              At Curb to Cloud Tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including scheduling professional data recovery services.
            </p>
            <p className={styles.paragraph}>
              Please read this Privacy Policy carefully. By using our website and services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.paragraph}>
              We collect information that you voluntarily provide to us when booking an appointment, contacting us, or requesting services. This information includes:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Contact Information:</strong> Your name, email address, phone number, physical address, and company name (if applicable).</li>
              <li className={styles.listItem}><strong>Service Descriptions:</strong> Descriptions of the technical issues, systems, or projects you require assistance with.</li>
              <li className={styles.listItem}><strong>Payment Data:</strong> Payment details are collected securely. All payment processing is handled by our third-party payment processor, Stripe. We do not store or have access to your full credit card information.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Google API User Data</h2>
            <p className={styles.paragraph}>
              Our website integrates with Google APIs (specifically the Google Calendar API) to provide automated scheduling capabilities. This integration accesses the business's own Google Calendar (Curb to Cloud Tech's calendar) to perform the following actions:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Reading Calendar Availability:</strong> Checking the business calendar availability to display open scheduling slots on our booking screen.</li>
              <li className={styles.listItem}><strong>Creating Calendar Events:</strong> Writing new appointment events (containing the customer's name, email, phone number, physical address, and service details) to the business calendar upon a customer booking an appointment.</li>
            </ul>
            <div className={styles.noticeBox}>
              <p className={styles.paragraph}>
                <strong>Compliance with Google API Services User Data Policy:</strong>
              </p>
              <p className={styles.paragraph}>
                Curb to Cloud Tech's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>Google API Services User Data Policy</a>, including the Limited Use requirements.
              </p>
              <p className={styles.paragraph}>
                We do not sell, rent, or lease any Google Calendar data to any third parties. We do not use Google Calendar data for serving advertisements, and we do not transfer this data to third parties other than as strictly necessary to facilitate and manage the booking services requested by you.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Third-Party Service Providers</h2>
            <p className={styles.paragraph}>
              We partner with selected third-party providers to operate our business and deliver services. These service providers only have access to your information to perform specific tasks on our behalf:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Stripe:</strong> Used for secure payment processing. Stripe processes your billing information in accordance with their privacy policy.</li>
              <li className={styles.listItem}><strong>Brevo:</strong> Used for transactional email delivery and customer relationship management. We use Brevo to send appointment confirmations, schedule updates, and transactional notifications.</li>
              <li className={styles.listItem}><strong>Google Analytics & Google Tag Manager:</strong> Used to monitor and analyze website traffic, user interactions, and performance to improve our website design.</li>
              <li className={styles.listItem}><strong>Facebook Pixel:</strong> Used to measure the effectiveness of advertising campaigns and understand actions taken on our website.</li>
              <li className={styles.listItem}><strong>Microsoft Clarity & Microsoft Advertising:</strong> Used to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine service popularity and online activity. Additionally, we use this information for site optimization, security, and advertising. For more information about how Microsoft collects and uses your data, visit the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className={styles.link}>Microsoft Privacy Statement</a>.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies and Tracking</h2>
            <p className={styles.paragraph}>
              We use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize the site and improve your experience. When you access the site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies through your browser settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Retention and Security</h2>
            <p className={styles.paragraph}>
              We retain your contact and appointment details only as long as necessary to provide services, maintain business records, and satisfy legal obligations. We implement appropriate administrative, technical, and physical security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Your Rights and Choices</h2>
            <p className={styles.paragraph}>
              Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact us at the email address provided below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have questions or comments about this Privacy Policy or our practices, please contact us at:
            </p>
            <p className={styles.paragraph}>
              <strong>Curb to Cloud Tech</strong><br />
              Email: <a href="mailto:curbtocloudtech@gmail.com" className={styles.link}>curbtocloudtech@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
