import React from "react";
import HeroSection from "./hero";
import About from "./About";
import Category from "./category";

const Home = () => {
    return (
    <div>
        <HeroSection />
        <Category />
        <About />
    </div>
    );
};

export default Home;