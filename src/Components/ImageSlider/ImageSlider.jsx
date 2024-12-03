import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Renamed the CSS file to be more generic
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images, settings }) => {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        ...settings // Merge any custom settings passed as props
    };

    return (
        <div className="container">
            <Slider {...defaultSettings} className="custom-slider">
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image.src} alt={image.name} className="product-image" />
                        <p className="product-name">{image.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
