import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Legal.module.scss';

export default function TermsOfService() {
  return (
    <div className={styles.legalPage}>
      <Head>
        <title>Terms of Service | Curb to Cloud Tech</title>
        <meta name="description" content="Terms of Service for Curb to Cloud Tech. Understand the terms, conditions, and rules for using our website and scheduling services." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: July 2, 2026</p>
        </header>

        <div className={styles.card}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Welcome to Curb to Cloud Tech. These Terms of Service govern your use of our website located at this domain and our professional data recovery services.
            </p>
            <p className={styles.paragraph}>
              By accessing our website or booking our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Services Provided</h2>
            <p className={styles.paragraph}>
              Curb to Cloud Tech offers residential and small business data recovery, file extraction, and hardware-level data retrieval services. Services may be performed in-person (on-site) or digitally (remotely), depending on the booking type selected. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Appointments and Scheduling</h2>
            <p className={styles.paragraph}>
              Appointments are scheduled through our online booking tool. By booking an appointment, you agree to provide accurate, current, and complete contact details (name, email, phone number, address, and issue description).
            </p>
            <p className={styles.paragraph}>
              <strong>Google Calendar Integration:</strong> Our scheduling tool integrates with Google Calendar to display available slots and record bookings. When you book an appointment, the details you provide (including your name, email, phone number, and issue description) will be automatically added to Curb to Cloud Tech's business calendar to schedule the appointment.
            </p>
            <p className={styles.paragraph}>
              <strong>Cancellations and Rescheduling:</strong> If you need to cancel or reschedule, please do so at least 24 hours before your scheduled appointment time. You can request changes by emailing us or using the links in your confirmation email.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Fees and Payments</h2>
            <p className={styles.paragraph}>
              Pricing for services is outlined on our website or provided via a direct quote. For certain services, a diagnostic fee or deposit may be required at the time of booking.
            </p>
            <p className={styles.paragraph}>
              <strong>Stripe Payments:</strong> All online payments and pre-authorizations are processed securely by Stripe. You agree to pay all charges incurred by you or on your behalf through the website, at the prices in effect when such charges are incurred.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Data Recovery Disclaimer</h2>
            <p className={styles.paragraph}>
              For file extraction and data recovery services: You acknowledge that retrieving files from locked, crashed, or unbootable systems carries inherent risks of data loss. Curb to Cloud Tech is not responsible for any pre-existing damage to your computer system, storage media, or drive. While we make every professional effort to retrieve your data, we do not guarantee successful recovery, and you agree that we are not liable for data that cannot be retrieved or is lost during the attempt.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Privacy and Analytics Tracking</h2>
            <p className={styles.paragraph}>
              Your use of our website and services is also governed by our Privacy Policy. We partner with third-party analytics and advertising networks, including Google Analytics, Facebook Pixel, and Microsoft Clarity. By using our website, you acknowledge and agree that these providers may capture behavioral metrics, heatmaps, and session interactions using cookies and tracking technologies to help us optimize our site, improve security, and analyze marketing effectiveness.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All content on this website, including text, graphics, logos, images, icons, and software, is the property of Curb to Cloud Tech and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or republish any content from this website without our prior written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              To the maximum extent permitted by applicable law, in no event shall Curb to Cloud Tech or its technicians be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, our website or services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Governing Law</h2>
            <p className={styles.paragraph}>
              These Terms of Service and any dispute arising out of or related to them or our services shall be governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law principles.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or concerns about these Terms of Service, please contact us at:
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
