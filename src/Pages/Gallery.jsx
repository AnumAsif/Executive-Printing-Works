import React from 'react'
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';

function Gallery() {
    return (
        <div className="gallery-div">
            <Hero2 image={aboutUsImage} heading="Gallery" />
        </div>
    )
}

export default Gallery
