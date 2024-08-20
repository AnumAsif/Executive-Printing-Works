import React, { useState }  from 'react';
import './CSS/About.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import Tabs from '../Components/Tabs/Tabs';
import about1 from '../Components/Assets/visionmission.jpg';
import about2 from '../Components/Assets/success.jpg';
import director from '../Components/Assets/director.jpg';
import MachinesSlider from './MachinesSlider.jsx';

export default function About() {
    const [activeTab, setActiveTab] = useState('who-we-are');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const tabs = [
        { id: 'who-we-are', label: 'Who We Are' },
        { id: 'our-director', label: 'Our Directors' },
        { id: 'equipment', label: 'Our Equipment' },
        { id: 'our-history', label: 'Our History' }
    ];
  return (
    <div>
        <Hero2 image={aboutUsImage} heading="About Us" />
        <Tabs tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />

        {/* <ul className="aboutus-tabs">
            <li className={`tab-link ${activeTab === 'who-we-are' ? 'active' : ''}`} onClick={() => handleTabClick('who-we-are')}>Who We Are</li>
            <li className={`tab-link ${activeTab === 'our-director' ? 'active' : ''}`} onClick={() => handleTabClick('our-director')}>Our Directors</li>
            <li  className={`tab-link ${activeTab === 'equipment' ? 'active' : ''}`} onClick={() => handleTabClick('equipment')}>Our Equipment</li>
            <li  className={`tab-link ${activeTab === 'our-history' ? 'active' : ''}`} onClick={() => handleTabClick('our-history')}>Our History</li>
        </ul> */}
        <div className="tab-content">
            <div className={ `who-we-are ${activeTab === 'who-we-are' ? 'active' : ''}`}>
                 {/* <h2>Who We Are</h2> */}
                <p><strong>Executive Printing Works Ltd</strong> was established in the late 1970’s, and is now recognised as one of the leading printing presses in Nairobi, Kenya. We are conveniently located in the city of Nairobi and currently employ over 50 highly-trained production and administrative staff. Executive has earned a good reputation in promptness, product quality and pricing standards and has delivered the very best to its customers.</p>
                <p>Executive sees itself as a part of the broader enterprise and looks to develop long-term mutually beneficial business relationship. We are committed to provide reliable and professional service at all times.</p>
                <div className="missionvision">
                    <div className="missiondiv">
                        <div className="mission">
                            <h1>Our Mission</h1>
                            <p>Our Mission is to provide high-quality print services to our clients with timely delivery and customer satisfaction. The passion we have for our work enables us to undertake all of our clients' jobs. We constantly strive to deliver the highest-quality products possible. There is no greater satisfaction than delivering a finished product that helps a client reach their goals and objectives.</p>
                        </div>
                        <img src={about1} alt="" className="missionimg"/>
                    </div>
                    <div className="visiondiv">
                        <img src={about2} alt="" className="visionimg"/>
                        <div className="vision">
                            <h1>Our Vision</h1>    
                            <p >Our Vision is to become the leading printing company in Kenya by providing high quality and reliable service to our clientele. We make use of the finest quality materials in the production of client orders ensuring quality, consistency, and timely delivery. We strive to always be there with quick and expert advice, friendly customer service. Our goal is to meet and exceed your expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`directors ${activeTab === 'our-director' ? 'active' : ''}`}>
                {/* <h2>Our Director</h2> */}
                {/* <p className="directorP">Meet the Directors of Executive Printing Works, a family-owned business dedicated to providing high-quality printing services in Kenya.</p> */}
                <div className="director-info m">
                    <div className="info-left">
                        <img src={director} alt=""/>
                        <h2>Muhamed Bilal Cockar</h2>
                        <p>Founder & CEO of the Company</p>
                    </div>
                    <div className="info-right">
                        <h1>Background</h1>
                        <h2>Professional Journey</h2>
                        <p>Mohamed began his career as an accountant in a reputable company, where he gained valuable experience in financial management and business operations. Inspired by his passion for printing and entrepreneurship, he took a bold step to start his own printing business.</p>
                        <h2>Entrepreneurial Journey</h2>
                        <p><span>Starting from Scratch:</span> With determination and vision, Mohamed purchased a second-hand printing machine to kickstart his business. Through hard work and perseverance, he gradually expanded the company's capabilities and infrastructure.</p>
                        <p><span>Company Growth:</span> Today, Executive Printing Works boasts a total of 15 machines, including offset printing machines, digital machines, dying, cutting, and gluing machines, among others. Mohamed's relentless pursuit of excellence and innovation has propelled the company's growth and success.</p>
                        <h1>Legacy and Impact</h1>
                        <h2>Pillar of the Company</h2>
                        <p>Mohamed's unwavering commitment and dedication have been the driving force behind the company's journey from humble beginnings to its current stature. His leadership and vision have shaped the company's culture and values, inspiring employees to strive for excellence.</p>
                        <h2>Enduring Legacy</h2>
                        <p>Mohamed's entrepreneurial spirit and resilience serve as an enduring legacy, guiding the company forward and inspiring future generations. Today, wherever the company stands, it is a testament to Mohamed's hard work, vision, and determination.</p>
                    </div>
                </div>
                <div className="director-info w">
                    <div className="info-left">
                        <img src={director} alt=""/>
                        <h2>Wajid Cockar</h2>
                        <p>Finance and Managing Director</p>
                    </div>
                    <div className="info-right">
                        <h1>Background</h1>
                        <h2>Educational Journey</h2>
                        <p>Wajid graduated in Business I.T., combining his passion for business and technology. His educational background equipped him with valuable skills in management and information technology.</p>
                        <h2>Professional Journey</h2>
                        <p><span>Joining the Family Business:</span> In 2010, Wajid embarked on his professional journey by joining his father's printing business. Since then, he has been an integral part of the company's operations, bringing fresh perspectives and innovative ideas to the table.</p>
                        <p><span>Company Growth:</span> Wajid's dedication and expertise as the Finance and Managing Director have played a crucial role in the company's growth and innovation. He has effectively managed the financial aspects of the business while also spearheading various initiatives to ensure its success.</p>
                        <h1>Family Dynamics</h1>
                        <h2>Collaborative Partnership</h2>
                        <p>Working alongside his father and other family members, Wajid embodies the spirit of collaboration and teamwork within the family. Together, they share a common vision for the company's success and work hand-in-hand to achieve their goals.</p>
                        <h2>Continuing the Legacy</h2>
                        <p>Wajid is committed to upholding the legacy established by his father and furthering the family's entrepreneurial journey. His role as the Finance and Managing Director ensures effective leadership and strategic decision-making for the company's continued growth and success.</p>
                    </div>
                </div>
                <div className="director-info s">
                    <div className="info-left">
                        <img src={director} alt=""/>
                        <h2>Suhayb Cockar</h2>
                        <p>Marketing and Managing Director</p>
                    </div>
                    <div className="info-right">
                        <h1>Background</h1>
                        <h2>Educational Journey</h2>
                        <p>Suhayb obtained a degree in Marketing and Business I.T., equipping him with a solid foundation in both marketing principles and technological applications in business.</p>
                        <h2>Professional Journey</h2>
                        <p><span>Joining the Family Business:</span> In 2014, Suhayb brought his expertise in marketing to the family business, joining as the Marketing and Managing Director. Since then, he has been instrumental in developing and executing marketing strategies to promote the company's services and expand its reach.</p>
                        <p><span>Company Growth:</span> Suhayb's role as the Marketing and Managing Director involves leading the company's marketing efforts with strategic planning and execution. He has successfully implemented campaigns to enhance brand awareness and drive customer engagement.</p>
                        <h1>Legacy and Impact</h1>
                        <h2>Collaborative Leadership</h2>
                        <p>Working alongside other family members, Suhayb fosters a collaborative environment where ideas are shared and decisions are made collectively. His leadership style emphasizes teamwork and mutual respect.</p>
                        <h2>Continuing Growth</h2>
                        <p>Suhayb is dedicated to the continued growth and success of the company. As the Marketing and Managing Director, he is committed to leveraging his expertise to drive innovation and expand the company's market presence.</p>
                    </div>
                </div>

            </div>
            <div className={`equipment ${activeTab === 'equipment' ? 'active' : ''}`}>
                {/* <h2>Equipment</h2> */}
                <h1>State-of-the-Art Printing Technology</h1>
                <h5>We pride ourselves on using cutting-edge printing machines and technology to deliver top-quality prints. Our vision is to consistently provide the best quality in every print job we undertake. With our deep understanding of modern printing techniques and market trends, we've established ourselves as industry leaders where quality is paramount.</h5>
                <MachinesSlider/>
                <h1>Pre-Press: Precision from the Start</h1>
                <p>With the constant change of technology, we currently use the Computer-to-Plate (CTP) System, in which Printing Plates are made directly from the Computer, eliminating the process of making Colour Separations / Films, resulting in faster turnaround times with our CTP Machine. We undertake the following Pre-Press work in-house:</p>
                <p>Digital Colour Proofs: Using EFI Technology for accurate color matching.</p>
                <p>CTP Plates with Agfa Technology</p>
                <h1>Press: Quality in Every Print</h1>
                <p>Our high-quality printing machines, all from Heidelberger Druckmaschinen AG, Germany, ensure flawless print jobs every time:</p>
                <ul>
                    <li>Heidelberg 5-Colour Press</li>
                    <li>Heidelberg 4-Colour Press</li>
                    <li>Heidelberg 2-Colour Press</li>
                    <li>Heidelberg Single-Colour Press</li>
                    <li>Heidelberg K Offset Series Press</li>
                    <li>Heidelberg M Offset Series Press</li>
                </ul>
                <h1>Post-Press: Perfecting the Finish</h1>
                <p>Once the print job is done, it moves to our Post-Press section, where it's finished to perfection.</p>
                <p><strong>Stahl Folding Machine:</strong>Precision folding with German engineering.</p>
                <p><strong>Polar Guillotine Machines:</strong>Automatic trimming for exact measurements, from Polar-Mohr Maschinenvertriebsgesellschaft GmbH & Co. KG, Germany.</p>
                <h1>Additional Post-Press Capabilities</h1>
                <p>Our Post-Press department is equipped with a range of specialized machines to meet diverse finishing needs:</p>
                <ul>
                    <li>Book Binding Machine</li>
                    <li>Calendar Machines</li>
                    <li>Cold & Hot Lamination Machines</li>
                    <li>Collating Machines</li>
                    <li>Die Cutting Machines</li>
                    <li>Drilling/Punching Machines</li>
                    <li>Foiling Machine</li>
                    <li>Perforation & Creasing Machines</li>
                    <li>Stitching Machines</li>
                    <li>Thread Sewing Machine</li>
                </ul>
               
            </div>
            <div className={`history ${activeTab === 'our-history' ? 'active' : ''}`}>
                <h1>Timeline of Achievements</h1>
                {/* <hr className="yellow"/> */}
                <ul>
                    <li><strong>Late 1970’s:</strong> Establishment of Executive Printing Works Ltd.</li>
                    <li><strong>Present:</strong> Recognized as one of the leading printing presses in Nairobi, Kenya.</li>
                    <li><strong>Over 50 Employees:</strong> Highly-trained production and administrative staff.</li>
                    <li><strong>Good Reputation:</strong> Earned for promptness, product quality, and pricing standards.</li>
                    <li><strong>Commitment to Excellence:</strong> Providing reliable and professional service at all times.</li>
                    <li><strong>Future Goals:</strong> To become the leading printing company in Kenya by providing high-quality and reliable service.</li>
                </ul>
                <h1>Technological Advancements</h1>
                {/* <hr className="green" /> */}
                <p>We are proud of our achievements and pride ourselves on being a complete source for all of your printing needs. We have always been on the edge of technology, believing that investing in technology improves our efficiencies. We are continuously coming up as a skilled, fast-moving team of professionals ready to learn from each other and meet the challenges to be successful.</p>
            </div>
      </div>
    </div>           
    
  )
}
