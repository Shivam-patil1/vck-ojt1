import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <h1 className="title">Vivekanand college kolhapur</h1>
        <p className="subtitle">Pick a color, preview it live, and copy the code instantly!</p>
      </div>
      <a
        href="https://github.com/CodeWonders/vck"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        ⭐ GitHub
      </a>
    </header>
  );
};

export default Header;
