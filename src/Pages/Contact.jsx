import React, { useState }  from 'react';
import './CSS/Contact.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import Tabs from '../Components/Tabs/Tabs';
// import QuoteForm from '../Components/QuoteForm/QuoteForm';
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm';
import ContactForm from '../Components/ContactForm/ContactForm';
import QuotationForm from '../Components/QuotationForm/QuotationForm';


// import about2 from '../Components/Assets/success.jpg';
// import director from '../Components/Assets/director.jpg';
// import MachinesSlider from './MachinesSlider.jsx';

export default function Contact() {
    const [activeTab, setActiveTab] = useState('quotation-form');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const tabs = [
        { id: 'quotation-form', label: 'Get a Quote' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'contact-us', label: 'Contact US' }

    ];
  return (
    <div>
        <Hero2 image={aboutUsImage} heading="Contact Us" />
        <Tabs tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
        <div className="tab-content">
            <div className={`quotation-form ${activeTab === 'quotation-form' ? 'active' : ''}`}>
                <QuotationForm/>
            </div>
            <div className={`feedback ${activeTab === 'feedback' ? 'active' : ''}`}>
                <FeedbackForm/>       
            </div>
            <div className={`contact-us ${activeTab === 'contact-us' ? 'active' : ''}`}>
                <ContactForm/>
            </div>
      </div>
    </div>           
    
  )
}
