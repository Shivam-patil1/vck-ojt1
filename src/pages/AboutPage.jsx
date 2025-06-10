import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Visual Color Picker (VCK)</h2>
      <p>
        Visual Color Picker (VCK) is a simple, elegant, and interactive tool for picking colors,
        previewing them instantly, and copying the hex codes easily. It helps designers and developers
        streamline their color selection process.
      </p>

      <p>
        This project is inspired by{' '}
        <a href="https://vck.codewonders.in" target="_blank" rel="noopener noreferrer">
          CodeWonders' VCK tool
        </a>
        . It is rebuilt using React with a clean component structure.
      </p>

      <h3>Features:</h3>
      <ul>
        <li>Live color preview</li>
        <li>Easy hex code copy</li>
        <li>Responsive UI</li>
        <li>Inspired by real-world developer tools</li>
      </ul>

      <p>
        Source Code:{' '}
        <a href="https://github.com/CodeWonders/vck" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default About;

