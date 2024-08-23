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
                    <span className='text'>info@executive.co.ke</span>
                </div>
                <div className='contact'>
                    <FontAwesomeIcon className='topbar-icon' icon={faPhone} />
                    <span className='text'>+254 738 711405 / +254 722 749300</span>
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
