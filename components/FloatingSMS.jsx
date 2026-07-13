import styles from '@/styles/FloatingSMS.module.scss';

export default function FloatingSMS() {
  return (
    <a
      href="sms:+18156690629?&body=Hi%20Curb%20to%20Cloud%20Tech%2C%20I'd%20like%20to%20request%20a%20quote%20or%20support%20session.%20My%20name%20is%3A%20"
      className={styles.smsBubble}
      aria-label="Send a text message for support request"
      title="Text Us"
    >
      <span className="material-symbols-outlined">sms</span>
    </a>
  );
}
