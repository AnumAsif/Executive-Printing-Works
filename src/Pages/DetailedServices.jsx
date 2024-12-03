import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/DetailedServices.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import Tabs from '../Components/Tabs/Tabs';

export default function DetailedServices() {
    const [activeTab, setActiveTab] = useState('printing-consultation');
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
        { id: 'printing-consultation', label: 'Printing Consultation' },
        { id: 'artwork-editing', label: 'Artwork Editing' },
        { id: 'offset-printing', label: 'Offset Printing' },
        { id: 'digital-printing', label: 'Digital Printing' },
        { id: 'finishing', label: 'Finishing' },
        { id: 'delivery', label: 'Delivery' },
    ];

    return (
        <div>
            {/* <Hero2 image={aboutUsImage} heading="Services" /> */}
            <Tabs tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
            <div className="service-tab-content">
                <div className={`printing-consultation ${activeTab === 'printing-consultation' ? 'active' : ''}`}>
                    <h1>Printing Consultation Services</h1>
                    <h4>
                        At <strong>EPW</strong>, we offer expert printing consultation services to help you achieve the best possible results for your projects. Our knowledgeable consultants provide personalized advice and guidance through every step of the printing process.
                    </h4>
                    <h3>Our Consultation Services Include:</h3>
                    <ul>
                        <li>
                            <h2>Design and Layout:</h2>
                            <p>Receive expert guidance on creating visually appealing and effective designs and layouts.</p>
                        </li>
                        <li>
                            <h2>Material Selection:</h2>
                            <p>Get recommendations on the best paper, inks, and finishes to suit your project’s needs and budget.</p>
                        </li>
                        <li>
                            <h2>Printing Techniques:</h2>
                            <p>Learn about the most suitable printing techniques, whether it’s offset, digital, or screen printing, to achieve your desired outcome.</p>
                        </li>
                        <li>
                            <h2>Cost Optimization:</h2>
                            <p>Discover strategies to optimize costs without compromising on quality.</p>
                        </li>
                        <li>
                            <h2>File Preparation:</h2>
                            <p>Ensure your digital files are correctly prepared and formatted for printing.</p>
                        </li>
                        <li>
                            <h2>Proofing and Quality Control:</h2>
                            <p>Benefit from thorough reviews and quality control checks to ensure your final product meets the highest standards.</p>
                        </li>
                        <li>
                            <h2>Environmental Considerations:</h2>
                            <p>Explore eco-friendly printing options to minimize your environmental impact.</p>
                        </li>                    
                    </ul>
                    <br />
                    <p>
                        Let us guide you through the complexities of the printing process, avoid common pitfalls, and ensure high-quality results. Contact us today for a consultation and take your printing projects to the next level.
                    </p>
                </div>
                <div className={`artwork-editing ${activeTab === 'artwork-editing' ? 'active' : ''}`}>
                    <h1>Artwork Editing Services</h1>
                    <h4>
                        Refine your designs to ensure they are print-ready and visually impactful. Our skilled team offers comprehensive artwork editing services to meet the highest standards of quality and precision.
                    </h4>
                    <h3>Our Artwork Editing Services Include:</h3>
                    <ul>
                        <li>
                            <h2>Image Enhancement and Retouching</h2>
                            <p>Improve the quality of your images with professional retouching.</p>
                        </li>
                        <li>
                            <h2>Layout Adjustments and Design Tweaks</h2>
                            <p>Optimize the design and layout for better visual appeal.</p>
                        </li>
                        <li>
                            <h2>Color Correction and Management</h2>
                            <p>Ensure accurate and vibrant colors.</p>
                        </li>
                        <li>
                            <h2>File Format Conversion and Optimization</h2>
                            <p>Prepare your files in the correct formats for printing.</p>
                        </li>
                    </ul>
                </div>
                <div className={`offset-printing ${activeTab === 'offset-printing' ? 'active' : ''}`}>
                    <h1>Offset Printing</h1>
                    <h4>
                        Experience high-quality printing with our advanced offset printing technology. Our offset printing machines deliver exceptional results for a wide range of printing needs.
                    </h4>
                    <ul>
                        <li>
                            <h2>Quality Assurance</h2>
                            <p>Our offset printing machines ensure precise color reproduction and sharp image clarity, guaranteeing professional-grade prints for your projects.</p>
                        </li>
                        <li>
                            <h2>Cost-Effectiveness</h2>
                            <p>Offset printing offers cost-effective solutions for large-volume printing jobs, making it the preferred choice for businesses seeking economical printing options.</p>
                        </li>
                        <li>
                            <h2>Versatility</h2>
                            <p>From brochures and flyers to business cards and catalogs, our offset printing services accommodate various print materials, providing versatility to meet your diverse printing requirements.</p>
                        </li>
                        <li>
                            <h2>Environmental Friendliness</h2>
                            <p>Choose offset printing for eco-friendly printing solutions. Our offset printing process minimizes waste and uses environmentally friendly inks, contributing to a sustainable printing approach.</p>
                        </li>
                        <li>
                            <h2>Customization Options</h2>
                            <p>Personalize your prints with our offset printing services. With customizable features such as paper types, finishes, and special effects, you can create unique and eye-catching prints tailored to your brand.</p>
                        </li>
                    </ul>
                </div>
                <div className={`digital-printing ${activeTab === 'digital-printing' ? 'active' : ''}`}>
                    <h1>Digital Printing</h1>
                    <h4>Experience the efficiency and versatility of our digital printing services. Perfect for short runs and quick turnarounds, our digital printing delivers sharp, vibrant results for a wide range of materials.</h4>
                    <ul className="digital-printing-list">
                        <li>
                            <h2>Speed and Efficiency</h2>
                            <p>Experience fast turnaround times with our state-of-the-art digital printing machine. Perfect for quick printing jobs without compromising quality.</p>
                        </li>
                        <li>
                            <h2>On-Demand Printing</h2>
                            <p>Get your prints when you need them with our digital printing services. Say goodbye to minimum order quantities and print only what you need, reducing waste and storage costs.</p>
                        </li>
                        <li>
                            <h2>High-Quality Output</h2>
                            <p>Enjoy crisp, vibrant prints with our advanced digital printing technology. From vivid colors to sharp details, our digital prints captivate attention and leave a lasting impression.</p>
                        </li>
                        <li>
                            <h2>Variable Data Printing</h2>
                            <p>Personalize your prints with ease using our digital printing capabilities. Whether it's personalized marketing materials or custom invitations, we make it easy to add variable data to your prints.</p>
                        </li>
                        <li>
                            <h2>Cost-Effective Solutions</h2>
                            <p>Opt for cost-effective printing solutions with our digital printing services. With no setup costs or plate fees, digital printing is ideal for small to medium print runs, saving you time and money.</p>
                        </li>
                        <li>
                            <h2>Flexibility and Versatility</h2>
                            <p>Explore endless possibilities with digital printing. From small format to large format prints, and a wide range of substrates, our digital printing services offer unmatched flexibility for your printing projects.</p>
                        </li>
                    </ul>
                </div>
                <div className={`finishing ${activeTab === 'finishing' ? 'active' : ''}`}>
                    <h1>Finishing Services</h1>
                    <h4>Enhance the final look and feel of your printed materials with our professional finishing services. We offer a variety of options to give your projects a polished and professional appearance.</h4>
                    <h3>Our Finishing Services Include:</h3>
                    <ul className="finishing-services-list">
                        <li>
                            <h2>Binding, Folding, and Cutting</h2>
                            <p>Ensure your prints are neatly finished.</p>
                        </li>
                        <li>
                            <h2>Lamination, Embossing, and Foil Stamping</h2>
                            <p>Add special effects to make your materials stand out.</p>
                        </li>
                        <li>
                            <h2>UV Coating and Varnishing</h2>
                            <p>Protect and enhance the appearance of your prints.</p>
                        </li>
                    </ul>
                </div>
                <div className={`delivery ${activeTab === 'delivery' ? 'active' : ''}`}>
                    <h1>Delivery Services</h1>
                    <h4>We provide reliable delivery services to ensure your printed materials reach you on time and in perfect condition. From local deliveries to international shipping, we handle all logistics with care and precision.</h4>
                    <h3>Our Delivery Services Include:</h3>
                    <ul>
                        <li>
                            <h2>Timely and Secure Local Deliveries</h2>
                            <p>Fast and safe delivery within local areas.</p>
                        </li>
                        <li>
                            <h2>International Shipping Options</h2>
                            <p>Reliable shipping to international destinations.</p>
                        </li>
                        <li>
                            <h2>Packaging Solutions</h2>
                            <p>Protect your prints with our secure packaging options.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
