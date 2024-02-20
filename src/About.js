import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
// import Lottie from 'lottie-react';
// import animationData from './assets/Animation - 1707113666442.json';

function About(){
    return(
         <div className="about-us-section">
            <div className="about-us-content">
                <h2>ABOUT US</h2>
                <p>Mercurii epitomizes excellence in design. The science of style and fashion are key elements in the development of every Mercurii eyewear frame. Our product team places the utmost emphasis on creating eyewear that is unique and stylish, while also providing maximum comfort for the consumer.

                At 'Mercurii', it's easy to choose your style from a variety of fashionable shapes, such as edgy rectangles, retro circles, and charming cat-eye designs in vibrant colors. Mercurii eyewear utilizes new and cutting-edge materials for its optical frames. Lightweight metals, thermoplastics (TR90), and high-quality compressed acetate (HDCA) options are available.

                Mercurii sunglasses showcase enchanting designs, including classic aviators, trendy retro styles, and snug-fitting wraparounds. High-quality polarized lenses offer 100% UV protection and glare-free vision.</p>
            </div>
            {/* <div className="about-us-image">
                {/* Replace the placeholder image with your actual image */}
                {/* <img src={about} alt="About Us" style={{width:'650px', height:'450px'}}/> */}
                {/* <Lottie animationData={animationData} style={{width:'650px', height:'450px', display:'flex'}} />
            </div>  */}
        </div>
    );
}

export default About;