import React from 'react';
import './CSS/Home.css';
import Hero from '../Components/Hero/Hero';
import Crawford from '../Components/Assets/crawford.jpg';
import Colorchart from '../Components/Assets/colorchart.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faArrowRight, faFileCirclePlus, faFileCircleCheck, faFileExport } from '@fortawesome/free-solid-svg-icons'; 
import Testimonies from './Testimonies';
import Services from './Services'; 
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleGetAQuoteClick = () => {
    navigate('/contact?tab=quotation-form');
    // handleNavigate()
  };
  const handleGetConsultation = () => {
    navigate('/contact?tab=contact-us');
  };
  const handleLearnMoreServices = () =>{
    navigate('/detailedservices?tab=printing-consultation');
  }
  const handleLearnMore = () => {
    navigate('/about?tab=who-we-are');
  };
  return (
    <div className="home">
      {/* HERO DIV */}
      <div className="hero-container">
        <Hero/>
      </div>

      {/* ABOUTUS DIV */}
      <div className="aboutus1">
        <div className="aboutus1-left">
          <h4>WE ARE PROFESSIONAL</h4>
          <h1>Professional Printing and Finishing Services for Individuals and Businesses</h1>
          <p>At Executive Printing Works, we offer both Offset and Digital Printing to meet your unique needs. Our core services include printing consultation, artwork editing, printing, finishing, and delivery, ensuring a seamless process from start to finish. We pride ourselves on our state-of-the-art machinery—using Heidelberg equipment for offset printing and finishing, and RICOH for digital printing. Our exceptional team is dedicated to providing top-notch service, from proofreading to final delivery. Discover the quality and reliability of Executive Printing Works, where your printing needs are our priority.</p>
          <button className="learnmorebtn" onClick={handleLearnMoreServices}>Learn More <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
        </div>
        <div className="aboutus1-right">
          <img src={Crawford} alt="stack of paper forming a complex pattern" />
          <div className="div-overlap">
            <FontAwesomeIcon className='printicon' icon={faPrint} />
            <p>We offer printing consultation, artwork editing, printing, finishing and delivery services.</p>
            <div className="hyphens-container">
              <span className="hyphen hyphen-1"></span>
              <span className="hyphen hyphen-2"></span>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES DIV */} 
      <Services />

      {/* CONSULTATION DIV */}
      <div className="consult-container">
        <div className="consult">
          <h1>We Provide Quality service at an affordable price!</h1>
          <h4>Is your Artwork Ready? Send it to us today and get a quote or a free consultation </h4>
          <div className="consult-btn-div">
            <button className="consultbtn"onClick={handleGetConsultation}>Consultation</button>
            <button className="getaquotebtn" onClick={handleGetAQuoteClick}>Get a Quote</button>
          </div>
        </div>
      </div>

      {/* PROCESS DIV */}
      <div className="processdiv">
        <h4>PROCESS</h4>
        <h1>How It Works</h1>
        <div className="processcyclediv">
          <div className="step1">
            <div className="fileicondiv">
              <FontAwesomeIcon className='fileicon one' icon={faFileCirclePlus} />
            </div>
            <h2>Submit your document</h2>
            <p>Complete the form displayed on our 'Get a Quote' page. We'll get back to you the same day.</p>
          </div>
          <div className="step2">
            <div className="fileicondiv">
              <FontAwesomeIcon className='fileicon two' icon={faFileExport} />
            </div>
            <h2>We proofread & edit your artwork if necessary</h2>
            <p>An appropriate editor will set to work on your document as soon as you send an LPO.</p>
          </div>
          {/* <CurvedArrow 
            fromSelector=".step1" 
            toSelector=".step2"  
            fromOffsetX={-50} 
            fromOffsetY={35}
            middleX={0}
            middleY={0} 
            toOffsetX={-480} 
            toOffsetY={35} 
            color="#e4e4e4"
            width={10}
          /> */}
          <div className="step3">
            <div className="fileicondiv">
              <FontAwesomeIcon className='fileicon' icon={faFileCircleCheck} />
            </div>
            <h2>We print your document</h2>
            <p>Using high-quality materials and the latest printing technology, we ensure your document is printed to perfection and ready for delivery.</p>
          </div>
          {/* <CurvedArrow 
             fromSelector=".step2" 
             toSelector=".step3"  
             fromOffsetX={-50} 
             fromOffsetY={35}
             middleX={0}
             middleY={0} 
             toOffsetX={-480} 
             toOffsetY={35} 
             color="#e4e4e4"
            width={10}
          /> */}
        </div>
      </div>

      {/* NEXT Component */}
      
      <div className="moreaboutdiv">
        <div className="moreabout-left">
          <img src={Colorchart} alt="color book for reference"/>
          <div className="overlapdiv"><p>Service You Can Count On</p></div>
        </div>
        <div className="moreabout-right">
          <h4>WE ARE PROFESSIONAL</h4>
          <h1>Who We Are</h1>
          <p>We provide fast, affordable, and high-quality printing services for all your needs. From business cards, brochures, and flyers to presentations, proposals, and even booklets, we ensure your documents are printed with precision and professionalism.</p>
          <button onClick={handleLearnMore} >Find Out More<FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
        </div>
      </div>

      {/* FILE FORMAT COMPONENT */}
      <div className="fileformatdiv">
        <h4>FORMAT</h4>
        <h1>We Work With All Major File Formats</h1>
        <div className="formatimgdiv">
          <div className="ai"></div>
          <div className="eps"></div>
          <div className="pdf"></div>
          <div className="id"></div>
          <div className="psd"></div>
        </div>
      </div>

      {/* TESTIMONIALS DIV */}
      <div className="testimonialdiv">
        <Testimonies/>
      </div>
    </div>
  );
}

export default Home;
