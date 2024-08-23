import React from 'react';
import './Footer.css';
import epw_logo from '../Assets/epwlogo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
    const scrollToTop = () => {
        setTimeout(()=>{
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}, 100);
    };

    return (
        <div className="footer">
            <div className="footerinfo">
                <div className="footer-logo">
                    <Link to='/'><img src={epw_logo} alt=""/></Link>
                    {/* <h4>Perfecting the Art of Quality Printing</h4> */}
                    <p>We are proud of our achievements and pride ourselves on being a complete source for all of your printing needs and have always been on the edge of technology. We believe that investing in technology improves our efficiencies. We are continuously coming up as a skilled, fast-moving team of professionals ready to learn from each other and meet the challenges to be successful.</p>
                </div>
                <div className="sitemap">
                    <h4>Quick Links</h4>
                    <div className="footer-links">
                        <Link to='/about?tab=who-we-are' onClick={scrollToTop}>About</Link>
                        <Link to='/detailedservices' onClick={scrollToTop}>Services</Link>
                        <Link to='/product' onClick={scrollToTop}>Products</Link>
                        <Link to='/contact' onClick={scrollToTop}>Contact</Link>
                    </div>
                </div>
                <div className="companyinfo">
                    <div className="address">
                        <h4>Visit Us</h4>
                        <p>No. 36 Kijabe Street, Nairobi</p>
                        <p>P.O. Box 22677, 00400</p>
                        <p>Nairobi, Kenya</p>
                        <p>Tel: +254 (0)20 2613382, 2613392</p>
                        <p>Mob: +254 (0)722 978428, (0)738 711405</p>
                        <p>Email: info@executive.co.ke</p>
                    </div>
                    <div className="socialmediaicons">
                        <FontAwesomeIcon className='social-icon fb' icon={faFacebook} />
                        <FontAwesomeIcon className='social-icon' icon={faTwitter} />
                        <FontAwesomeIcon className='social-icon' icon={faPinterest} />
                        <FontAwesomeIcon className='social-icon' icon={faInstagram} />
                    </div>
                </div>
                
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright: © 2024 | All Rights Reserved</p>
            </div>
        </div>    
    );
};        
       

export default Footer;
