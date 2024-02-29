import React, { useEffect } from "react";
import HeroSection from "./hero";
import About from "./About";
import Category from "./category";
import './animation.css';

const Home = () => {
  useEffect(() => {
    const element = document.querySelector(".hero-section");
    if (element) {
      element.classList.add("visible");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-left");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero-section fade-in-left">
        <HeroSection />
      </div>
      <div className="category-section fade-in-left">
        <Category />
      </div>
      <div className="explore-section fade-in-left">
        <About />
      </div>
    </div>
  );
};

export default Home;
