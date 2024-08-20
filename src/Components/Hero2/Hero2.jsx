// src/components/Hero2.js
import React from 'react';
import './Hero2.css'; // Assuming you'll have some custom styles

const Hero2 = ({ image, heading }) => {
  return (
    <div className="hero2-container" style={{backgroundImage: `linear-gradient(rgba(64, 67, 78, 0.8) 100%, rgba(16, 44, 91, 0.8) 100%), url(${image})`}}>
        <div className="hero2">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default Hero2;
