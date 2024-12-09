import React from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'; 

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='left'>
                <div className='contact'>
                    <FontAwesomeIcon className='topbar-icon' icon={faEnvelope} />
                    <a href="mailto:info@executive.co.ke" className='text'>info@executive.co.ke
                    </a>
                </div>
                <div className='contact'>
                    <FontAwesomeIcon className='topbar-icon' icon={faPhone} />
                    <a className='text' href="tel:+254 738 711405">+254 738 711405</a>/<a className='text' href="tel:+254 722 749300"> +254 722 749300</a>
                </div>
            </div>
            <div className='right'>
                <FontAwesomeIcon className='topbar-social-icon' icon={faFacebook} />
                <FontAwesomeIcon className='topbar-social-icon' icon={faTwitter} />
                <FontAwesomeIcon className='topbar-social-icon' icon={faPinterest} />
                <FontAwesomeIcon className='topbar-social-icon' icon={faInstagram} />
            </div>
        </div>
    );
}
