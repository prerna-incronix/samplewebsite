import React from 'react';
import './assets/styles.css'; 
import img from'./assets/pngs/Explore.png';         // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="mission-chashma-imgmsgs mission-chashma-template--21826586313000__072f6d2f-6d43-4e93-89a6-d8f2dc4d26b5" >

  <div class="mission-width-style">
  <div class="mission-style-img" > 
<img class="cashma-img-mission" loading="lazy"
   srcset={img}
       src="//chashma.com/cdn/shop/files/Group_24926_1500x.png?v=1706947997"
       sizes="(min-width: 1920px) 910px, (min-width:750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
       alt=""
       width="100vw"
       height="312"/>
       {/* <div class="text-overlay">
        <p> EXPLORE</p> */}
  </div>
    </div>
    {/* </div> */}
  

  <div class="mission-chashma-msg" >
    
    <p>Transforming eyewear into vibrant expressions of identity</p>
    
    <p>Uniting style with health and precision vision</p>
    
    <p>Fostering a community where Indians proudly embrace their roots.</p>
    
    <p>Providing all with bold and stylish confidence.</p>
    
  </div>
</div>
  );
}

export default AboutUs;
