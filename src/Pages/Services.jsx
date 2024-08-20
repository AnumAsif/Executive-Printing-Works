import React from 'react'
import './CSS/Services.css'
import service_info from '../Components/Assets/servicedata'
import Service from '../Components/Service/Service'


const Services = () => {
  return (
    <div className="services">
      <h4>SERVICES</h4>
      <h1>We Provide Best Printing & Finishing Services</h1>
      {/* <hr/> */}
      <div className='service-types'>
        { service_info.map((service,i)=>{
          return <Service key={i} id={service.id} name={service.name} image={service.image} info={service.info} detailedinfo={service.detailedinfo}/>})}
      </div>
    </div>
  )
}

export default Services;
