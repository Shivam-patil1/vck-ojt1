import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>VCK College</h3>
          <p>Empowering Minds, Building Futures</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>123 College Street</li>
            <li>City, State 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@vckcollege.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 VCK College. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 