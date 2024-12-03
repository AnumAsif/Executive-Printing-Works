import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/Contact.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import Tabs from '../Components/Tabs/Tabs';
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm';
import ContactForm from '../Components/ContactForm/ContactForm';
import QuotationForm from '../Components/QuotationForm/QuotationForm';
// import QuoteForm from '../Components/QuoteForm/QuoteForm';
import QuoteForm from '../Components/QuoteForm/QuoteForm';


export default function Contact() {
    const [activeTab, setActiveTab] = useState('quotation-form');
    const location = useLocation();

     // Function to scroll to the top
     const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Update the tab based on the URL query parameter and scroll to top
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab) {
            setActiveTab(tab);
            // Wait for the next tick to ensure the tab content has rendered
            setTimeout(() => {
                scrollToTop();
            }, 100);
        }
    }, [location]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const tabs = [
        { id: 'quotation-form', label: 'Get a Quote' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'contact-us', label: 'Contact Us' },
        // { id:'quote-form', label: 'Quote Test'}
    ];

    return (
        <div>
            {/* <Hero2 image={aboutUsImage} heading="Contact Us" /> */}
            <Tabs tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
            <div className="contact-tab-content">
                <div className={`quotation-form ${activeTab === 'quotation-form' ? 'active' : ''}`}>
                    <QuotationForm />
                </div>
                <div className={`feedback ${activeTab === 'feedback' ? 'active' : ''}`}>
                    <FeedbackForm />
                </div>
                <div className={`contact-us ${activeTab === 'contact-us' ? 'active' : ''}`}>
                    <ContactForm />
                </div>
                {/* <div className={`quote-form ${activeTab === 'quote-form' ? 'active' : ''}`}>
                    <QuoteForm />
                </div> */}
            </div>
        </div>
    );
}
