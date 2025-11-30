import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";


  

function Home() {
useScrollAnimation();

  /* SCROLL ANIMATION */
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="landing-page">

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="glow-blob blob-blue"></div>
        <div className="glow-blob blob-purple"></div>

        <div className="hero-content scroll-animate">
          <h1 className="hero-title">
            Find Lost Items <br />
            <span className="hero-gradient">Faster With AI.</span>
          </h1>

          <p className="hero-subtitle">
            A smart AI-powered campus lost & found portal designed to instantly match
            lost items with found ones.
          </p>

          <div className="hero-btn-row">
            <Link to="/report-lost" className="btn btn-primary">Report Lost Item</Link>
            <Link to="/items" className="btn btn-ghost">Browse Items</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SECTION (Full width) ===== */}
      <section className="why-full scroll-animate">
        <div className="section-header">
          <span className="section-kicker">WHY SMART LOST & FOUND?</span>

          <h2 className="section-title">
            One portal. No more posters, group chats or chaos.
          </h2>

          <p className="section-subtitle">
            We centralize every report, so instead of asking in 10 WhatsApp
            groups, students can quickly search and filter items in seconds.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">🔍</div>
            <h3>Powerful search</h3>
            <p>
              Filter by category, location, date or keywords to find items
              across the entire campus in one place.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">✨</div>
            <h3>AI-style matching</h3>
            <p>
              Our matching logic compares text and images to surface the most
              likely matches between lost and found items.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-green">🛡</div>
            <h3>Secure claims</h3>
            <p>
              Admin verifies each match, keeping belongings safe and ensuring
              they are returned to the right person.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (FULL SCREEN) ===== */}
      <section className="section-how-full scroll-animate">
        <div className="section-header">
          <span className="section-kicker">How It Works</span>

          <h2 className="section-title">
            From report to recovered in three steps.
          </h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Submit a report</h3>
            <p>
              Lost or found something? Upload a photo, write a short description
              and select where it happened.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Smart matching</h3>
            <p>
              The portal compares your report with existing items and suggests
              possible matches to the admin.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Verify and claim</h3>
            <p>
              The Lost & Found office verifies ownership and coordinates a safe
              pickup location on campus.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ===== RESTORED HOW IT WORKS MINI CARDS ===== */}
<section className="section how-chunks scroll-animate">
  <div className="steps-grid-small">
    <div className="chunk-card">
      <div className="chunk-number">1</div>
      <h3>Submit Report</h3>
      <p>Upload photo, add description, and choose location.</p>
    </div>

    <div className="chunk-card">
      <div className="chunk-number">2</div>
      <h3>Auto-Matching</h3>
      <p>AI compares lost & found items to suggest instant matches.</p>
    </div>

    <div className="chunk-card">
      <div className="chunk-number">3</div>
      <h3>Claim Safely</h3>
      <p>Admin verifies ownership and schedules a pickup.</p>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
