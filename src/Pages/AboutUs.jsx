import React, {useState,useEffect, useRef} from 'react';
import PaperImage from '../Components/Assets/paperstack.jpg';
import './AboutUs.css'
import director from '../Components/Assets/director.jpg';

function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const moreInfoRef = useRef(null);
    useEffect(() => {
        if (isVisible && moreInfoRef.current) {
            // Scroll to the top of the detailed info div
            // moreInfoRef.current.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: moreInfoRef.current.offsetTop - 150,
                behavior: 'smooth',
            });
        }
    }, [isVisible]);

    const toggleMoreInfo = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="aboutus">
            <div className="aboutus-short">
                <div className="about-img">
                    <img src={PaperImage} alt="Colorful Papers Rack next to About Us Info "/>
                </div>
                <div className="about-textdiv">
                    <h1>About Us</h1>
                    <div className="about-text">
                        <p>Executive Printing Works Ltd was established in the late 1970’s, and is now recognised as one of the leading printing presses in Nairobi, Kenya. We are conveniently located in the city of Nairobi and currently employ over 50 highly-trained production and administrative staff. Executive has earned a good reputation in promptness, product quality and pricing standards and has delivered the very best to its customers.</p>
                        <p>Executive sees itself as a part of the broader enterprise and looks to develop long-term mutually beneficial business relationship. We are committed to provide reliable and professional service at all times.</p>
                    </div>
                    <button className="about-btn" onClick={toggleMoreInfo}>Learn More</button>
                </div>
            </div>
            <div className={`aboutus-detailed ${isVisible ? 'visible' : ''}`} ref={moreInfoRef} >
                <div className="aboutus-detailed-left"></div>
                <div className="aboutus-detailed-center">
                    <div className="mission-vision">
                        <h1>Our Mission</h1>
                        <hr className="red" />
                        <p>Our Mission is to provide high-quality print services to our clients with timely delivery and customer satisfaction. The passion we have for our work enables us to undertake all of our clients' jobs. We constantly strive to deliver the highest-quality products possible. There is no greater satisfaction than delivering a finished product that helps a client reach their goals and objectives.</p>
                        <h1>Our Vision</h1>
                        <hr className="orange"/>
                        <p>Our Vision is to become the leading printing company in Kenya by providing high quality and reliable service to our clientele. We make use of the finest quality materials in the production of client orders ensuring quality, consistency, and timely delivery. We strive to always be there with quick and expert advice, friendly customer service. Our goal is to meet and exceed your expectations.</p>    
                        <h1>Timeline of Achievements</h1>
                        <hr className="yellow"/>
                        <ul>
                            <li><strong>Late 1970’s:</strong> Establishment of Executive Printing Works Ltd.</li>
                            <li><strong>Present:</strong> Recognized as one of the leading printing presses in Nairobi, Kenya.</li>
                            <li><strong>Over 50 Employees:</strong> Highly-trained production and administrative staff.</li>
                            <li><strong>Good Reputation:</strong> Earned for promptness, product quality, and pricing standards.</li>
                            <li><strong>Commitment to Excellence:</strong> Providing reliable and professional service at all times.</li>
                            <li><strong>Future Goals:</strong> To become the leading printing company in Kenya by providing high-quality and reliable service.</li>
                        </ul>
                        <h1>Technological Advancements</h1>
                        <hr className="green" />
                        <p>We are proud of our achievements and pride ourselves on being a complete source for all of your printing needs. We have always been on the edge of technology, believing that investing in technology improves our efficiencies. We are continuously coming up as a skilled, fast-moving team of professionals ready to learn from each other and meet the challenges to be successful.</p>
                    </div>
                    <div className="directors">
                        <h1>Directors</h1>
                        <hr />
                        <h2>Meet the Directors of Executive Printing Works, a family-owned business dedicated to providing high-quality printing services in Kenya.     </h2>
                        <div className="director-info-div">
                            <div className="director">
                                <div className="d-image">
                                    <img src={director} alt=""/>
                                    <h1>Muhamed Bilal Cockar</h1>
                                    <h3>Founder and Managing Director</h3>
                                </div>
                                <div className="d-info">

                                    <h2>Background:</h2>
                                    <p><strong>Professional Journey:</strong><br />
                                    Mohamed began his career as an accountant in a reputable company, where he gained valuable experience in financial management and business operations. Inspired by his passion for printing and entrepreneurship, he took a bold step to start his own printing business.</p>
                                    <h2>Entrepreneurial Journey:</h2>
                                    <p><strong>Starting from Scratch:</strong><br />
                                    With determination and vision, Mohamed purchased a second-hand printing machine to kickstart his business. Through hard work and perseverance, he gradually expanded the company's capabilities and infrastructure.</p>
                                    
                                    <p><strong>Company Growth:</strong><br />
                                    Today, Executive Printing Works boasts a total of 15 machines, including offset printing machines, digital machines, dying, cutting, and gluing machines, among others. Mohamed's relentless pursuit of excellence and innovation has propelled the company's growth and success.</p>

                                    <h2>Legacy and Impact:</h2>
                                    <p><strong>Pillar of the Company:</strong><br />
                                    Mohamed's unwavering commitment and dedication have been the driving force behind the company's journey from humble beginnings to its current stature. His leadership and vision have shaped the company's culture and values, inspiring employees to strive for excellence.</p>

                                    <p><strong>Enduring Legacy:</strong><br />
                                    Mohamed's entrepreneurial spirit and resilience serve as an enduring legacy, guiding the company forward and inspiring future generations. Today, wherever the company stands, it is a testament to Mohamed's hard work, vision, and determination.</p>
                                </div>
                            </div>
                            <div className="director">
                                <div className="d-image">
                                    <img src={director} alt=""/>
                                    <h1>Wajid Cockar</h1>
                                    <h3>Finance and Managing Director</h3>
                                </div>
                                <div className="d-info">
                                    <h2>Background:</h2>
                                    <p><strong>Educational Journey:</strong><br />
                                    Wajid graduated in Business I.T., combining his passion for business and technology. His educational background equipped him with valuable skills in management and information technology.</p>

                                    <h2>Professional Journey:</h2>
                                    <p><strong>Joining the Family Business:</strong><br />
                                    In 2010, Wajid embarked on his professional journey by joining his father's printing business. Since then, he has been an integral part of the company's operations, bringing fresh perspectives and innovative ideas to the table.</p>
                                    
                                    <h2>Contributions:</h2>
                                    <p><strong>Driving Growth and Innovation:</strong><br />
                                    Wajid's dedication and expertise as the Finance and Managing Director have played a crucial role in the company's growth and innovation. He has effectively managed the financial aspects of the business while also spearheading various initiatives to ensure its success.</p>

                                    <h2>Family Dynamics:</h2>
                                    <p><strong>Collaborative Partnership:</strong><br />
                                    Working alongside his father and other family members, Wajid embodies the spirit of collaboration and teamwork within the family. Together, they share a common vision for the company's success and work hand-in-hand to achieve their goals.</p>

                                    <p><strong>Continuing the Legacy:</strong><br />
                                    Wajid is committed to upholding the legacy established by his father and furthering the family's entrepreneurial journey. His role as the Finance and Managing Director ensures effective leadership and strategic decision-making for the company's continued growth and success.</p>
                                </div>
                            </div>
                            <div className="director">
                                <div className="d-image">
                                    <img src={director} alt=""/>
                                    <h1>Suhayb Bilal Cockar</h1>
                                    <h3>Marketing and Managing Director</h3>
                                </div>
                                <div className="d-info">
                                    <h2>Background:</h2>
                                    <p><strong>Educational Journey:</strong><br />
                                    Suhayb obtained a degree in Marketing and Business I.T., equipping him with a solid foundation in both marketing principles and technological applications in business.</p>

                                    <h2>Professional Journey:</h2>
                                    <p><strong>Joining the Family Business:</strong><br />
                                    In 2014, Suhayb brought his expertise in marketing to the family business, joining as the Marketing and Managing Director. Since then, he has been instrumental in developing and executing marketing strategies to promote the company's services and expand its reach.</p>
                                    
                                    <h2>Contributions:</h2>
                                    <p><strong>Strategic Marketing Leadership:</strong><br />
                                    Suhayb's role as the Marketing and Managing Director involves leading the company's marketing efforts with strategic planning and execution. He has successfully implemented campaigns to enhance brand awareness and drive customer engagement.</p>

                                    <h2>Family Dynamics:</h2>
                                    <p><strong>Collaborative Leadership:</strong><br />
                                    Working alongside other family members, Suhayb fosters a collaborative environment where ideas are shared and decisions are made collectively. His leadership style emphasizes teamwork and mutual respect.</p>

                                    <p><strong>Continuing Growth:</strong><br />
                                    Suhayb is dedicated to the continued growth and success of the company. As the Marketing and Managing Director, he is committed to leveraging his expertise to drive innovation and expand the company's market presence.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="aboutus-detailed-right"></div>
                
            {/* <div className="directors">
                
                    <div className="director2"></div>
                    <div className="director3"></div>
            </div> */}
                   
            </div>
            
            
        </div>
    )
}

export default AboutUs;
