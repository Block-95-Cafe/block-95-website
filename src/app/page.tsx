"use client";

import styles from "./page.module.css";
import Hero from "./components/landing-page/Hero";
import Menu from "./components/landing-page/Menu";

export default function LandingPage() {
  const block95 = {
    address: "3155 Bruckner Blvd",
    cityAndState: "Bronx, NY 10461",
  };

  return (
    <main className={styles.landing}>
      {/* Hero */}
      <Hero styles={styles} />
      {/* Marquee */}
      <div className={styles["marquee-wrap"]}>
        <div className={styles["marquee-inner"]}>
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              CLASSIC LATTE<span className={styles.dot}>·</span>&nbsp;AMERICANO
              <span className={styles.dot}>·</span>&nbsp;ICED CHAI
              <span className={styles.dot}>·</span>&nbsp;CAPPUCCINO
              <span className={styles.dot}>·</span>&nbsp;BLACK TEA
              <span className={styles.dot}>·</span>&nbsp;CHAI LATTE
              <span className={styles.dot}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Menu */}
      <Menu styles={styles} />

      {/* Info Strip */}
      <div className={styles["info-strip"]}>
        <div className={styles["info-cell"]}>
          <p className={styles["info-cell-label"]}>Hours</p>
          <p className={styles["info-cell-value"]}>
            Mon – Sat
            <br />
            8am – 4pm
          </p>
        </div>
        <div className={styles["info-cell"]}>
          <p className={styles["info-cell-label"]}>Location</p>
          <p className={styles["info-cell-value"]}>
            {block95.address}
            <br />
            {block95.cityAndState}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles["footer-logo"]}>Block 95</span>
        <span className={styles["footer-note"]}>Specialty Coffee · NYC</span>
      </footer>
    </main>
  );
}
