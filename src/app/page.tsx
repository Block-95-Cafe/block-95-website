"use client";

export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600&family=Barlow:wght@300;400&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0a0a;
          color: #f0f0f0;
          font-family: 'Barlow', sans-serif;
        }

        .landing {
          background: #0a0a0a;
          color: #f0f0f0;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Grain overlay */
        .landing::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 100;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 8vw;
          border-bottom: 1px solid #222;
        }

        .hero-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: clamp(0.65rem, 1vw, 0.85rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 1.2rem;
          animation: fadeUp 0.8s ease both;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(6rem, 18vw, 18rem);
          line-height: 0.88;
          letter-spacing: -0.01em;
          color: #f0f0f0;
          animation: fadeUp 0.8s 0.1s ease both;
        }

        .hero-title span {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1px #f0f0f0;
        }

        .hero-socials {
          margin-top: 2.5rem;
          display: flex;
          gap: 1rem;
          animation: fadeUp 0.8s 0.2s ease both;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          border: 1px solid #444;
          background: transparent;
          color: #b0b0b0;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 400;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .social-btn:hover {
          border-color: #f0f0f0;
          color: #f0f0f0;
          background: rgba(255,255,255,0.04);
        }

        .social-btn svg {
          flex-shrink: 0;
        }

        .hero-badge {
          position: absolute;
          right: 8vw;
          bottom: 10vh;
          width: 110px;
          height: 110px;
          border: 1px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: spin 20s linear infinite;
        }

        .hero-badge-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #777;
          line-height: 1.8;
        }

        /* ── MARQUEE ── */
        .marquee-wrap {
          border-top: 1px solid #1c1c1c;
          border-bottom: 1px solid #1c1c1c;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.9rem 0;
        }

        .marquee-inner {
          display: inline-block;
          animation: marquee 45s linear infinite;
        }

        .marquee-inner span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.15em;
          color: #555;
        }

        .marquee-inner span.dot {
          color: #f0f0f0;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        /* ── MENU SECTION ── */
        .menu-section {
          padding: 7vh 8vw;
          border-bottom: 1px solid #1c1c1c;
        }

        .section-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 4rem;
        }

        .menu-header {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          letter-spacing: 0.05em;
          color: #f0f0f0;
          margin-bottom: 0.3rem;
        }

        .menu-sub-header {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #1c1c1c;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .menu-col {
          padding-right: 4vw;
        }

        .menu-col:last-child {
          padding-right: 0;
          padding-left: 4vw;
          border-left: 1px solid #1c1c1c;
        }

        .menu-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid #141414;
        }

        .menu-item-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 1.5vw, 1.1rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d0d0d0;
        }

        .menu-item-price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          letter-spacing: 0.1em;
          color: #888;
        }

        .menu-addons {
          margin-top: 2rem;
          padding: 1.2rem 0;
          border-top: 1px solid #1c1c1c;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .menu-addon {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #666;
        }

        .menu-addon strong {
          color: #aaa;
          font-weight: 600;
        }

        /* ── INFO STRIP ── */
        .info-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-bottom: 1px solid #1c1c1c;
        }

        .info-cell {
          padding: 4vh 4vw;
          border-right: 1px solid #1c1c1c;
        }

        .info-cell:last-child {
          border-right: none;
        }

        .info-cell-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 0.8rem;
        }

        .info-cell-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          letter-spacing: 0.08em;
          color: #c0c0c0;
          line-height: 1.3;
        }

        /* ── FOOTER ── */
        .footer {
          padding: 3vh 8vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          color: #555;
        }

        .footer-note {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #555;
        }

        .scroll-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          text-decoration: none;
          width: fit-content;   /* prevents full-width stretch */
          margin-top: 1.2rem;   /* separates it from social buttons */
        }

        .scroll-hint:hover {
          border-color: #f0f0f0;
        }

        .scroll-hint-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 400;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888;
          transition: color 0.2s;
        }

        .scroll-hint:hover .scroll-hint-label {
          color: #f0f0f0;
        }

        .scroll-hint-arrow {
          animation: bob 1.6s ease-in-out infinite;
          color: #666;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }

        .scroll-hint:hover .scroll-hint-arrow {
          color: #f0f0f0;
        }

        /* ── ANIMATIONS ── */
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .menu-grid { grid-template-columns: 1fr; }
          .menu-col:last-child { padding-left: 0; border-left: none; border-top: 1px solid #1c1c1c; margin-top: 2rem; padding-top: 2rem; }
          .info-strip { grid-template-columns: 1fr; }
          .info-cell { border-right: none; border-bottom: 1px solid #1c1c1c; }
          .hero-badge { display: none; }
        }


      `}</style>

      <div className="landing">
        {/* Hero */}
        <section className="hero">
          <p className="hero-eyebrow">Specialty Coffee · New York</p>
          <h1 className="hero-title">
            Block
            <span>95</span>
          </h1>
          <p className="hero-eyebrow">Espresso · Teas · Smoothies</p>
          <div className="hero-socials">
            <a
              href="https://www.instagram.com/block95cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
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
              href="https://maps.google.com/?q=Block+95+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
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
          <a href="#menu" className="scroll-hint">
            <span className="scroll-hint-label">View Menu</span>
            <span className="scroll-hint-arrow">
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

          <div className="hero-badge">
            <p className="hero-badge-text">
              Est. 2025
              <br />
              Block
              <br />
              95
              <br />
              NYC
            </p>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i}>
                CLASSIC LATTE<span className="dot">·</span>&nbsp;AMERICANO
                <span className="dot">·</span>&nbsp;ICED CHAI
                <span className="dot">·</span>&nbsp;CAPPUCCINO
                <span className="dot">·</span>&nbsp;BLACK TEA
                <span className="dot">·</span>&nbsp;CHAI LATTE
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Menu */}
        <section id="menu" className="menu-section">
          <p className="section-label">Menu — 001</p>

          {/* Espresso */}
          <h2 className="menu-header">Limited Espresso</h2>
          <p className="menu-sub-header">
            Hot / Iced &nbsp;·&nbsp; Prepared in limited daily quantities
          </p>

          <div className="menu-grid">
            <div className="menu-col">
              {[
                { name: "Classic Latte", price: "8oz / $4.00" },
                { name: "Americano", price: "8oz / $3.00" },
                { name: "Cappuccino", price: "8oz / $3.50" },
              ].map((item) => (
                <div className="menu-item" key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="menu-col">
              {[
                { name: "Iced Latte", price: "12oz / $4.50" },
                { name: "Iced Americano", price: "12oz / $3.50" },
                { name: "Iced Chai", price: "12oz / $4.50" },
              ].map((item) => (
                <div className="menu-item" key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-addons">
            <span className="menu-addon">
              Oat or Almond Milk <strong>+$0.75</strong>
            </span>
            <span className="menu-addon">
              Extra Espresso Shot <strong>+$1.00</strong>
            </span>
            <span className="menu-addon">
              Vanilla / Sugar Cane Syrup <strong>+$0.75</strong>
            </span>
          </div>

          {/* Teas */}
          <h2 className="menu-header" style={{ marginTop: "5rem" }}>
            Teas
          </h2>
          <p className="menu-sub-header">Hot · 8oz</p>

          <div className="menu-grid">
            <div className="menu-col">
              {[
                { name: "Black Tea", price: "8oz / $2.00" },
                { name: "Green Tea", price: "8oz / $2.00" },
              ].map((item) => (
                <div className="menu-item" key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="menu-col">
              {[
                { name: "Hot Chocolate", price: "8oz / $4.00" },
                { name: "Chai Latte", price: "8oz / $4.00" },
              ].map((item) => (
                <div className="menu-item" key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="menu-header" style={{ marginTop: "5rem" }}>
            Smoothies
          </h2>
          <p className="menu-sub-header">Iced · 8oz</p>

          <div className="menu-grid">
            {/* Specific styling to override last-child styling*/}
            <div
              style={{
                "border-left": "none",
                "padding-right": 0,
                "padding-left": 0,
              }}
              // className="menu-col"
            >
              {[{ name: "Berry Blast", price: "12oz / $6.00" }].map((item) => (
                <div className="menu-item" key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Strip */}
        <div className="info-strip">
          <div className="info-cell">
            <p className="info-cell-label">Hours</p>
            <p className="info-cell-value">
              Mon – Sat
              <br />
              7am – 3pm
            </p>
          </div>
          <div className="info-cell">
            <p className="info-cell-label">Location</p>
            <p className="info-cell-value">
              Block 95
              <br />
              New York, NY
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <span className="footer-logo">Block 95</span>
          <span className="footer-note">Specialty Coffee · NYC</span>
        </footer>
      </div>
    </>
  );
}
