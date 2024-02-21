import React from "react";
import HeroSection from "./hero";
import About from "./About";
import Category from "./category";
import './assets/styles.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="category-section">
        <Category />
      </div>
      <div className="explore-section">
        <About />
      </div>
      
    </div>
  );
};

export default Home;
