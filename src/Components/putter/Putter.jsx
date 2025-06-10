import React from 'react';
import './Putter.css';

const Putter = () => {
  return (
    <footer className="putter">
      <p>
        Made with ❤️ by{' '}
        <a href="https://codewonders.dev" target="_blank" rel="noopener noreferrer">
          CodeWonders
        </a>{' '}
        | <a href="https://github.com/CodeWonders/vck" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p>© {new Date().getFullYear()} VCK Clone</p>
    </footer>
  );
};

export default Putter;
