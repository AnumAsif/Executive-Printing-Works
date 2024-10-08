import React  from 'react';
import {useService} from '../../Context/ServiceContext';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'; 
// import DetailedServicePage from '../../Pages/DetailedServicePage'
import {Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const Service = (props) => {
    // const navigate = useNavigate();
    const {setSelectedService} = useService()
    // const handleClick=()=>{
    //     setSelectedService([props.name, props.image,props.info,props.detailedinfo])
    // }
    const handleServiceClick = () => {
        setSelectedService([
          props.name,
          props.alias,
          props.image,
          props.info,
          props.detailedinfo,
        ]);
      };
     
    return (
        <div className="service">
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            <hr/>
            <div className="findmore">
                <h4>Find Out More</h4>
                <Link className="btn-link" to={`/detailedservices?tab=${props.alias}`} onClick={handleServiceClick}>
                    <FontAwesomeIcon className="btn-link-icon" icon={faCircleArrowRight} />
                </Link>            
            </div>

        </div>
    )
}

export default Service
