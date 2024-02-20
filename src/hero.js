import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles.css'; // Import CSS file for styling
import img1 from './assets/jpgs/image1.jpg'
import img2 from './assets/jpgs/image2.jpg'
import img3 from './assets/jpgs/image3.jpg'

const HeroSection = () => {
  return (
    <div className="hero">
      {/* Carousel for background images */}
      <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false} showStatus={true}>
        <div>
          <img src={img1} alt="Background1" />
        </div>
        <div>
          <img src={img2} alt="Background2" />
        </div>
        <div>
          <img src={img3} alt="Background3" />
        </div>
        {/* Add more images as needed */}
      </Carousel>

      {/* Foreground content */}
      <div className="hero__content">
        <h1 className="hero__title">Your Title Here</h1>
        <p className="hero__subtitle">Your Subtitle Here</p>
      </div>
    </div>
  );
}

export default HeroSection;
