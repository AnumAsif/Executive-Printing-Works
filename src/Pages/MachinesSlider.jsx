import React from 'react';
import Slider from 'react-slick';
import './CSS/MachinesSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import AgfaAcento from '../Components/Assets/Machines/Agfa Acento II S CTP Machine.jpg';
import EpsonStylusPro7800 from '../Components/Assets/Machines/Epson Stylus Pro 7800.jpg';
import EpsonStylusProR2400 from '../Components/Assets/Machines/Epson Stylus Pro R2400.jpg';
import LoaderKOffset from '../Components/Assets/Machines/K Offset Series - KORD.jpg';
import MOffsetSeries from '../Components/Assets/Machines/M Offset Series - MO-E.jpg';
import Polar92E from '../Components/Assets/Machines/Polar 92 E Guillotine Machine.jpg';
import Polar115SDP from '../Components/Assets/Machines/Polar 115 SD-P Guillotine Machine.jpg';
import PrintmasterGTO52 from '../Components/Assets/Machines/Printmaster GTO 52-1.jpg';
import PrintmasterPM74 from '../Components/Assets/Machines/Printmaster PM 74-4.jpg';
import SpeedmasterSM52_2 from '../Components/Assets/Machines/Speedmaster SM 52-2.jpg';
import SpeedmasterSM52NewGen from '../Components/Assets/Machines/Speedmaster SM 52-2 (New Generation).jpg';
import SpeedmasterSM52_4 from '../Components/Assets/Machines/Speedmaster SM 52-4.jpg';
import StahlFoldingMachine from '../Components/Assets/Machines/Stahl Folding Machine Ti-52.jpg';

const images = [
    { src: AgfaAcento, name: "Agfa Acento II S CTP Machine" },
    { src: EpsonStylusPro7800, name: "Epson Stylus Pro 7800" },
    { src: EpsonStylusProR2400, name: "Epson Stylus Pro R2400" },
    { src: LoaderKOffset, name: "LoaderK Offset Series - KORD" },
    { src: MOffsetSeries, name: "M Offset Series - MO-E" },
    { src: Polar92E, name: "Polar 92 E Guillotine Machine" },
    { src: Polar115SDP, name: "Polar 115 SD-P Guillotine Machine" },
    { src: PrintmasterGTO52, name: "Printmaster GTO 52-1" },
    { src: PrintmasterPM74, name: "Printmaster PM 74-4" },
    { src: SpeedmasterSM52_2, name: "Speedmaster SM 52-2" },
    { src: SpeedmasterSM52NewGen, name: "Speedmaster SM 52-2 (New Generation)" },
    { src: SpeedmasterSM52_4, name: "Speedmaster SM 52-4" },
    { src: StahlFoldingMachine, name: "Stahl Folding Machine Ti-52" },
];

const MachinesSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container">
            <Slider {...settings} className="machines-slider">
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <p className="equipment-name">{image.name}</p>
                        <img src={image.src} alt={image.name} className="equipment-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Custom Arrow Components
// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray", right: "-25px" }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray", left: "-25px" }}
//       onClick={onClick}
//     />
//   );
// };

export default MachinesSlider;
