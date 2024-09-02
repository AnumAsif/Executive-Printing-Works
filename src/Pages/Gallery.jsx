import React from 'react';
import './CSS/Gallery.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import photos from '../Components/Assets/photos';
function Gallery() {
    return (
        <div className="gallery-div">
            <Hero2 image={aboutUsImage} heading="Gallery" />
            <div className="gallery-container">
            {photos.map((photo) => (
                <div key={photo.id} className="gallery-item">
                <div className="gallery-info">
                    <h3>{photo.product_name}</h3>
                </div>
                {photo.product_images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`${photo.product_name} ${index + 1}`}
                    className="gallery-image"
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Gallery
