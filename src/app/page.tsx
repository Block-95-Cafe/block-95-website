"use client";

import styles from "@/src/app/page.module.css";
import Hero from "./components/landing-page/Hero";
import Menu from "./components/landing-page/Menu";
import InfoStrip from "./components/landing-page/InfoStrip";

export default function LandingPage() {
  return (
    <main className={styles.landing}>
      {/* Hero */}
      <Hero />
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
      <Menu />

      {/* Info Strip */}
      <InfoStrip />

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles["footer-logo"]}>Block 95</span>
        <span className={styles["footer-note"]}>Specialty Coffee · NYC</span>
      </footer>
    </main>
  );
}
