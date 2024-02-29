// AboutUs.js
import React from 'react';
import './About.css';
import img1 from'./assets/pngs/focus.png'

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-section">
                <h1>ABOUT US</h1>
                <p>Polish Eyewear represents the epitome of design perfection. Our commitment to blending science with style forms the foundation of each exquisite piece in our eyewear collection. The dedicated product team places paramount importance on crafting eyewear that seamlessly combines uniqueness, forward-thinking fashion, and unparalleled comfort for the discerning consumer.</p>
                <p>At 'Polish Eyewear,' the process of selecting your ideal style becomes effortlessly enjoyable, thanks to an array of trendy shapes such as modern rectangles, vintage rounds, and elegant cat eyes, offered in a vibrant palette. Our optical frames boast the use of cutting-edge materials, including lightweight metals, thermoplastic (TR90), and High-Definition Compressed Acetate (HDCA).</p>
                <p>The sunwear collection from Polish Eyewear presents enchanting designs spanning from timeless aviators to fashionable retros and snug-fitting wraparounds. With top-tier polarized lenses, we ensure not only 100% UV protection but also glare-free vision for a superior visual experience.</p>
            </div>
            <div className="vision-section">
                <h2>OUR VISSION</h2>
                <p>We stand by the philosophy that "it's all about you—your essence, your community, your vitality, and your flair." Each individual is unique and deserves the finest eyewear; what you opt for at 'Polish Eyewear' truly defines your personal style.
                </p>
            </div>
            <div className="vision-section">
                <h2>OUR MISSION</h2>
                <p>"At POLISH Eyewear, our goal is to deliver unmatched clarity, comfort, and elegance through our selection of top-tier eyewear products. We are committed to enriching the vision and lifestyle of our clientele by presenting inventive optical solutions meticulously crafted with precision and attention."</p>                                                                                                                                                                                                                                                                                                                                                                
            </div>
        </div>
    );
}

export default AboutUs;
