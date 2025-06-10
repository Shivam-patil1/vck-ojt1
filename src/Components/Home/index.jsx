import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className="home">
      <div className="college-logo">
        <img src="/images/vivekananda-logo.png" alt="Vivekananda College Logo" />
      </div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Vivekananda College</h1>
          <p className="subtitle">Empowering Minds, Building Futures</p>
          <div className="cta-buttons">
            <Link to="/admission" className="cta-primary">Apply Now</Link>
            <Link to="/about" className="cta-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/students.jpg" alt="Students at Vivekananda College" />
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <h2>Experience Vivekananda College</h2>
          <p>Take a virtual tour of our campus and facilities</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/your-video-id" 
              title="Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="/images/education.jpg" alt="Quality Education" />
          <h3>Quality Education</h3>
          <p>Experience world-class education with our expert faculty and modern facilities.</p>
        </div>
        <div className="feature-card">
          <img src="/images/career.jpg" alt="Career Support" />
          <h3>Career Support</h3>
          <p>Get comprehensive career guidance and placement assistance.</p>
        </div>
        <div className="feature-card">
          <img src="/images/campus.jpg" alt="Modern Campus" />
          <h3>Modern Campus</h3>
          <p>Study in state-of-the-art facilities designed for optimal learning.</p>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <h2>Campus Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/gallery1.jpg" alt="Campus Building" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery2.jpg" alt="Library" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery3.jpg" alt="Laboratory" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery4.jpg" alt="Sports Facility" />
            </div>
            <div className="gallery-item">
              <img src="/vck.png" alt="Cafeteria" />

          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
};

export default Home; 