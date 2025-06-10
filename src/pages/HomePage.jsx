import React, { useState } from 'react';
import './Home.css';
import background from '../assets/vck.png';

const Home = () => {
  const [color, setColor] = useState('#00bcd4'); // Default color

  const handleColorChange = (e) => {
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied color: ${color}`);
  };

  return (
    <div className="home">
      <h1>Visual Color Picker</h1>
      <p>Pick a color below and see it applied instantly!</p>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-picker"
      />

      <div
        className="color-box"
        style={{ backgroundColor: color, backgroundImage: `url(${background})` }}
      ></div>

      <p className="color-value">{color}</p>

      <button className="copy-btn" onClick={handleCopy}>
        Copy Color
      </button>
    </div>
  );
};

export default Home;
