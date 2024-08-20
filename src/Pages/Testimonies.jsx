import React from 'react';
import { useTestimony } from '../Context/TestimonyContext'; // Import the custom hook
import testimonydata from '../Components/Assets/testimonydata.js'
import './CSS/Testimonies.css'

const Testimonies = () => {
    const {addTestimony} = useTestimony();
  
    const handleAddTestimony = () => {
      addTestimony({ client_name: 'John Doe', client_testimony: 'Great service!' });
    };
  
    return (
        <div className="testimoniesdiv">
            <h4>TESTIMONIES</h4>
            <h1>What Clients say about us</h1>
            <div className="testimonialcards">
                {testimonydata.map((testimony, index) => (
                <div className="testimonycard" key={index}>
                    <div className="card-left">
                        <img src={testimony.client_image} alt=""/>
                    </div>
                    <div className="card-right">
                        <p className="testimony">{testimony.client_testimony}</p>
                        <h5 className="clientname">{testimony.client_name}</h5>
                    </div>
                </div>
                ))}
            </div>
            {/* <button onClick={handleAddTestimony}>Add Testimony</button> */}
           
        </div>
        
    );

};

export default Testimonies;
