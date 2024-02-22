import React from "react";
import { Link } from "react-router-dom";
import sunglasses from "./assets/sunglasses.png";
import eyewear from "./assets/eyewear.png";
import './assets/styles.css';
import Card from './card';
import './CategoryCatalogue';
import './SunglassCatalogue';

function Category() {
  return (
    <div className="category-section">
      <div className="category-title">
        <h2>CATEGORIES</h2>
      </div>
      <section className="category-card-section">
        <Link to="/CategoryCatalogue" className="category-link">
          <div className="category-card">
           
            <img src={eyewear} alt="Eyewear" className="category-card-img" />
           
            <div className="category-card-overlay">
            
              <h3>Eyewear</h3>
              </div>
            </div>
            </Link>
            
       
        <Link to="/SunglassCatalogue" className="category-link">
          <div className="category-card">
            
            <img
              src={sunglasses}
              alt="Sunglasses"
              className="category-card-img"
            />
            <div className="category-card-overlay">
              <h3>Sunglasses</h3>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Category;