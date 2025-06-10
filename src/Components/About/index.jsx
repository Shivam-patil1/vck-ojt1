import React from 'react';
import './index.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-content">
          <h1>About VCK College</h1>
          <p>Building Tomorrow's Leaders Today</p>
        </div>
        <div className="about-image">
          <img src="/images/about-hero.jpg" alt="VCK College Campus" />
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <img src="/images/mission.jpg" alt="Our Mission" />
            <h2>Our Mission</h2>
            <p>To provide quality education that empowers students to become innovative leaders and responsible global citizens.</p>
          </div>
          <div className="vision">
            <img src="/images/vision.jpg" alt="Our Vision" />
            <h2>Our Vision</h2>
            <p>To be a leading institution of higher education, recognized globally for academic excellence and innovation.</p>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <img src="/images/achievement1.jpg" alt="Academic Excellence" />
              <h3>Academic Excellence</h3>
              <p>Consistently ranked among top institutions</p>
            </div>
            <div className="achievement-card">
              <img src="/images/achievement2.jpg" alt="Research Innovation" />
              <h3>Research Innovation</h3>
              <p>Leading breakthrough research projects</p>
            </div>
            <div className="achievement-card">
              <img src="/images/achievement3.jpg" alt="Industry Partnership" />
              <h3>Industry Partnership</h3>
              <p>Strong connections with leading companies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/principal.jpg" alt="College Principal" />
              <h3>Dr. John Smith</h3>
              <p>Principal</p>
            </div>
            <div className="team-member">
              <img src="/images/dean1.jpg" alt="Dean of Sciences" />
              <h3>Dr. Sarah Johnson</h3>
              <p>Dean of Sciences</p>
            </div>
            <div className="team-member">
              <img src="/images/dean2.jpg" alt="Dean of Arts" />
              <h3>Dr. Michael Brown</h3>
              <p>Dean of Arts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 