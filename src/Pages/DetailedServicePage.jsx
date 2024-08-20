import React,{ useEffect, useRef } from 'react'
import './CSS/DetailedServicePage.css'
import {useService} from './../Context/ServiceContext';
import service_product from '../Components/Assets/servicedata'
// import Service from '../Components/Service/Service'
import Services from '../Pages/Services'
import parse from 'html-react-parser'


const DetailedServicePage = () => {
    const detailedServiceRef = useRef(null);
    const {selectedService}=useService()
    useEffect(() => {
        if (detailedServiceRef.current) {
          window.scrollTo({
            top: detailedServiceRef.current.offsetTop - 70,
            behavior: 'smooth',
          });
        }
      }, [selectedService]); // Run this effect whenever selectedService changes
    
    // const html = selectedService[3]
    return(
        <div className ="detailed-service-page">
            {/* <Services /> */}
            <div className="service-detailed" ref={detailedServiceRef}>
            <div className="service-detailed-left"></div>
            {selectedService ? ( // Check if selectedService is truthy
                    <div className="service-detailed-center">
                        <div>
                            <h1>{selectedService[0]}</h1>
                            <div className="service-img">
                                <img src={selectedService[1]} alt="" />
                            </div>
                            {/* <p>{selectedService[2]}</p> */}
                            {/* <p>{html}</p> */}
                            {parse(selectedService[3])} {/* Render parsed HTML */}
                        </div>
                        
                        { service_product.map((service,i)=>{
                            if (service.name !== selectedService[0]){
                            return (<div className="other-service"><h1>{service.name}</h1><div className="service-img"><img src={service.image} alt=""/></div>{parse(service.detailedinfo)}</div>)
                            }else
                            return null
                        })}
                        
                    </div>
                    ) : (
                        // null // Render nothing if selectedService is falsy
                        <Services />
                        )}
            <div className="service-detailed-right"></div>
            
            </div>
        
                
                
        </div>
    ) 
}
export default DetailedServicePage;