import Image from "next/image";
import styles from "@/src/app/page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles["hero-eyebrow"]}>Bronx Based Cafe · New York</p>

      <h1 className={styles["hero-title"]}>
        <Image
          className={styles["little-guy"]}
          src="/littleguy.svg"
          alt="little guy"
          width={0}
          height={0}
        />
        <span className={styles["hero-title-text"]}>
          <span className={styles["hero-title-block"]}>Block</span>
          <span className={styles["hero-title-95"]}>95</span>
        </span>
      </h1>

      <div className={styles["hero-socials"]}>
        <a
          href="https://www.instagram.com/block95cafe"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["social-btn"]}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="0.5"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          Instagram
        </a>
        <a
          href="https://maps.app.goo.gl/wYgXXLt92zR8Gu677"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["social-btn"]}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Find Us
        </a>
      </div>

      {/* Scroll to Menu Button */}
      <a href="#menu" className={styles["scroll-hint"]}>
        <span className={styles["scroll-hint-label"]}>View Menu</span>
        <span className={styles["scroll-hint-arrow"]}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l7 7 7-7" />
          </svg>
        </span>
      </a>

      <div className={styles["hero-badge"]}>
        <p className={styles["hero-badge-text"]}>
          Est. 2026
          <br />
          Block
          <br />
          95
          <br />
          NYC
        </p>
      </div>
    </section>
  );
}
