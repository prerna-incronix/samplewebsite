//CategoryCatalogue.js

import React, { useState } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { categories } from "./assets/data/data";
import "./assets/product.css";
import logo from './assets/pngs/logo.png'
import './animation.css';

const CategoryCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <div className="top-middle">
        {/* <ul>
          <li><span id="polishText">POLISH</span></li>
          <li><span id="eyewearText">Eyewear</span></li>
        </ul> */}
        <img src={logo} alt = "Polish Eyewear" className="navlogo"/>
      </div>
      <div className="title-container">
        <h1 className="animated-title">Eyewear</h1>
        <div className="glasses-animation"></div>
      </div>
      <div className="catalogue-container">
        <div className="catalogue-row">
          <div className="catalogue-col-1">
            <CategoryList
              categories={categories}
              onSelect={handleSelectCategory}
            />
          </div>
          <div className="catalogue-col-2">
            <ProductList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCatalogue;
