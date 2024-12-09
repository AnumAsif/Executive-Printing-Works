import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  // Handle Get A Quote button click
  const handleGetAQuoteClick = () => {
    navigate('/contact?tab=quotation-form');
  };

  // Handle Learn More button click
  const handleLearnMoreClick = () => {
    navigate('/about?tab=who-we-are');
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="typing-text">Print With Precision</h1>
        <h1 className="typing-text secondh1">Impress With Impact</h1>
        <br />
        <h4>UNLOCK THE POWER OF PRINT WITH EPW</h4>
        <h4>YOUR PRINTING PARTNER FOR EXCELLENCE</h4>
        <br />
        <div className="btn-div">
          <button className="getaquote" onClick={handleGetAQuoteClick}>
            Get A Quote
          </button>
          <button className="learnmore" onClick={handleLearnMoreClick} >
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
}

export default Hero;


