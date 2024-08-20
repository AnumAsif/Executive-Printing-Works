import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Print With Precision</h1>
        <h1>Impress With Impact</h1>
        <br/>
        <h4>UNLOCK THE POWER OF PRINT WITH EPW</h4> 
        <h4>YOUR PRINTING PARTNER FOR EXCELLENCE</h4>
        <br/>
        <div className="btn-div">
          <button className="getaquote">Get A Quote</button>
          <button className="learnmore">Learn More</button>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
}        
/* 
        <div className="hero-left">
            <p>Executive Printing Works</p>
            <h3>WHERE</h3>
            <h2>PRINTS MEETS</h2>
            <h1>PERFECTIONS</h1>
            <div className="hero-btns">
              <div className="hero-findmore-btn">
                  <div>Browse Our Products</div> 
                  
              </div>
              <div className="hero-getaquote-btn">
                  <div>Get A Quote</div> 
                  <img src={ArrowIcon} alt=""/>
              </div>
            </div>
            
            
        </div>
        <div className="hero-right">
            <img src={PrintingMachine} alt=""/>
        </div> */
    
  


export default Hero
