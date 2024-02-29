import React from "react";
import { Link } from "react-router-dom";
import sunglasses from "./assets/sunglasses.png";
import eyewear from "./assets/eyewear.png";
import './assets/styles.css';

function Category() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="category-section">
      <div className="category-title">
        <h2>CATEGORIES</h2>
      </div>
      <section className="category-tiles">
        <Link to="/CategoryCatalogue" className="category-link" onClick={scrollToTop}>
          <div className="category-tile">
            <img src={eyewear} alt="Eyewear" className="category-tile-img" />
            <div className="category-tile-overlay">
              <h3>Eyewear</h3>
            </div>
          </div>
        </Link>
        <Link to="/SunglassCatalogue" className="category-link" onClick={scrollToTop}>
          <div className="category-tile">
            <img
              src={sunglasses}
              alt="Sunglasses"
              className="category-tile-img"
            />
            <div className="category-tile-overlay">
              <h3>Sunglasses</h3>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Category;
