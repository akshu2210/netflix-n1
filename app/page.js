"use client";

import { useEffect, useState } from "react";
import "./globals.css";

const features = [
  {
    number: "01",
    title: "Cinematic Display",
    text: "Deep blacks, vivid colors, and ultra-smooth motion make every game feel like a Netflix premiere.",
  },
  {
    number: "02",
    title: "Game Mode",
    text: "Instant performance optimization keeps your frame rates high and your gameplay responsive.",
  },
  {
    number: "03",
    title: "Immersive Audio",
    text: "Rich spatial sound puts you inside the action with cinematic clarity.",
  },
  {
    number: "04",
    title: "Advanced Cooling",
    text: "Intelligent thermal management keeps N-1 running cool during intense sessions.",
  },
];

const specs = [
  ["DISPLAY", '16" OLED / 240Hz'],
  ["PROCESSOR", "Intel Core Ultra 9"],
  ["GRAPHICS", "NVIDIA RTX 5070"],
  ["MEMORY", "32GB DDR5"],
  ["STORAGE", "2TB SSD"],
  ["BATTERY", "Up to 12 hours"],
];

export default function Home() {
  const [active, setActive] = useState("performance");

  /*
   * ==============================
   * NAVIGATION / ACTIVE SECTION
   * ==============================
   */

  useEffect(() => {
    const sectionIds = ["performance", "features", "specs"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 140;

      let currentSection = "performance";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop - navbarHeight - 100;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ==============================
   * SMOOTH SCROLL
   * ==============================
   */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    if (
      id === "performance" ||
      id === "features" ||
      id === "specs"
    ) {
      setActive(id);
    }

    const navbar = document.querySelector(".navbar");

    const navbarHeight = navbar
      ? navbar.offsetHeight
      : 137;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });
  };

  /*
   * ==============================
   * BACK TO TOP
   * ==============================
   */

  const backToTop = () => {
    setActive("performance");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        {/* LOGO */}

        <div
          className="logo"
          onClick={() => scrollToSection("performance")}
        >
          NETFLIX
        </div>

        {/* NAVIGATION */}

        <nav>
          <button
            type="button"
            className={
              active === "performance" ? "active" : ""
            }
            onClick={() =>
              scrollToSection("performance")
            }
          >
            Performance
          </button>

          <button
            type="button"
            className={
              active === "features" ? "active" : ""
            }
            onClick={() => scrollToSection("features")}
          >
            Features
          </button>

          <button
            type="button"
            className={
              active === "specs" ? "active" : ""
            }
            onClick={() => scrollToSection("specs")}
          >
            Specs
          </button>
        </nav>

        {/* GET N-1 */}

        <button
          type="button"
          className="nav-cta"
          onClick={() => scrollToSection("cta")}
        >
          GET N-1
        </button>
      </header>

      {/* =========================
          PERFORMANCE / HERO
      ========================= */}

      <section
        id="performance"
        data-section="performance"
        className="hero section"
      >
        <div className="hero-content">

          {/* PRODUCT LABEL */}

          <div className="product-label">
            NETFLIX N-1 / GAMING LAPTOP
          </div>

          {/* HERO TITLE */}

          <h1>
            Don&apos;t
            <br />
            Just
            <br />
            <span>Watch.</span>
            <br />
            Play.
          </h1>

          {/* HERO DESCRIPTION */}

          <p>
            Meet N-1. A cinematic gaming laptop engineered
            for players who want every frame to feel like a
            premiere.
          </p>

          {/* PRODUCT PRICE + BUY BUTTON */}

          <div className="hero-purchase">
            <div className="hero-price">
              <span>Starting at</span>
              <strong>₹1,29,999</strong>
            </div>

            <button
              type="button"
              className="hero-buy"
              onClick={() => scrollToSection("cta")}
            >
              BUY N-1 <span>→</span>
            </button>
          </div>
        </div>

        {/* LAPTOP */}

        <div className="laptop">
          <div className="screen">
            <div className="screen-glow"></div>

            <div className="n-logo">N</div>

            <div className="screen-text">
              PLAY WITHOUT LIMITS.
            </div>
          </div>

          <div className="keyboard">
            {Array.from({ length: 48 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PERFORMANCE STATS
      ========================= */}

      <section className="performance-stats">
        <div className="section-heading">
          <h2>
            Built for the
            <br />
            final boss.
          </h2>

          <p>
            Every component of N-1 is engineered to keep
            your game fast, smooth, and immersive.
          </p>
        </div>

        <div className="stats-grid">
          <Stat
            number="01"
            value="240Hz"
            title="ULTRA-SMOOTH"
          />

          <Stat
            number="02"
            value="RTX 5070"
            title="NEXT-GEN GRAPHICS"
          />

          <Stat
            number="03"
            value="32GB"
            title="GAMING MEMORY"
          />

          <Stat
            number="04"
            value="2TB"
            title="SSD STORAGE"
          />
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section
        id="features"
        data-section="features"
        className="features section"
      >
        <div className="eyebrow">
          FEATURES
        </div>

        <div className="section-heading">
          <h2>
            The cinema
            <br />
            is yours.
          </h2>

          <p>
            N-1 brings the cinematic DNA of Netflix into a
            machine built for serious players.
          </p>
        </div>

        <div className="feature-showcase">
          <div className="giant-n">
            N
          </div>

          <div className="showcase-text">
            PLAY WITHOUT LIMITS.
          </div>
        </div>

        <div className="feature-list">
          {features.map((feature) => (
            <article
              className="feature-item"
              key={feature.number}
            >
              <div className="feature-number">
                {feature.number}
              </div>

              <div className="feature-content">
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          SPECS
      ========================= */}

      <section
        id="specs"
        data-section="specs"
        className="specs section"
      >
        <div className="eyebrow">
          SPECIFICATIONS
        </div>

        <div className="section-heading">
          <h2>
            More power.
            <br />
            Less compromise.
          </h2>

          <p>
            Everything you need to play harder, create faster
            and stay in the game longer.
          </p>
        </div>

        <div className="spec-list">
          {specs.map(([label, value]) => (
            <div
              className="spec-row"
              key={label}
            >
              <span>{label}</span>

              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CTA / PURCHASE
      ========================= */}

      <section
        id="cta"
        className="cta section"
      >
        <div className="cta-inner">

          <div className="eyebrow cta-eyebrow">
            NETFLIX N-1
          </div>

          <h2>
            Ready to
            <br />
            press play?
          </h2>

          <p>
            Step into a new generation of gaming with the
            Netflix N-1.
          </p>

          {/* PRICE */}

          <div className="cta-price">
            <span>Starting at</span>
            <strong>₹1,29,999</strong>
          </div>

          {/* PURCHASE BUTTON */}

          <button
            type="button"
            className="main-cta"
            onClick={() => scrollToSection("performance")}
          >
            BUY N-1
            <span>→</span>
          </button>

          <div className="purchase-note">
            Free delivery · 1-year warranty · Secure checkout
          </div>
        </div>
      </section>

      {/* =========================
          FLOATING N
      ========================= */}

      <div
        className="floating-n"
        onClick={backToTop}
      >
        <span>N</span>
      </div>

      {/* =========================
          BACK TO TOP
      ========================= */}

      <button
        type="button"
        className="back-top"
        aria-label="Back to top"
        onClick={backToTop}
      >
        ↑
      </button>
    </main>
  );
}

/*
 * ==============================
 * STAT COMPONENT
 * ==============================
 */

function Stat({ number, value, title }) {
  return (
    <div className="stat-card">
      <span className="stat-number">
        {number}
      </span>

      <span className="stat-value">
        {value}
      </span>

      <h3>{title}</h3>
    </div>
  );
}