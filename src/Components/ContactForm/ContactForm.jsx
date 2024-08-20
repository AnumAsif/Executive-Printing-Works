import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'; 

const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="info-group">
                    <div className="info-item">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <p>
                            <strong style={{color:'black'}}>Customer Support:</strong> <br />
                            tel: +254 (0)20 2631382, 2613392 <br />
                            mob: +254 (0)722 978428, (0)738 711405
                        </p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <p>
                            <strong style={{color:'black'}}>General Questions</strong> <br />
                            email - info@executive.co.ke
                        </p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon className='icon' icon={faLocationDot} />
                        <p>
                            <strong style={{color:'black'}}>Address:</strong> <br />
                            No. 36 Kijabe Street, Nairobi <br />
                            P.O. Box 22617, 00400 <br />
                            Nairobi, Kenya
                        </p>
                    </div>
                </div>
            </div>

            <div className="form-map-container">
                <div className="contact-form-section">
                    <h3>Put Life Into Your Ideas With Us</h3>
                    <p>Let’s discuss your project and find out what we can do to provide value.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="text" name="phone" placeholder="Phone No." required />
                        </div>
                        <input type="email" name="email" placeholder="Email Id" required />
                        <textarea name="projectBrief" placeholder="Project Brief..." required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="contact-map">
                    <h4>How To Find Us</h4>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3578129196733!2d36.81659461480962!3d-1.2863892990616238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e4f0e4f031%3A0x120e8ed5a2db53bb!2sKijabe%20Street%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1635299506840!5m2!1sen!2s" 
                        width="100%" 
                        height="340" 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Company Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
