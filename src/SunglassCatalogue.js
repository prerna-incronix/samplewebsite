// SunglassCategoryCatalogue.js
import React, { useState } from "react";
import SunglassCategoryList from "./SunglassCategoryList";
import SunglassProductList from "./SunglassProductList";
import { categories } from "./assets/data/data";
import "./assets/product.css";

const SunglassCategoryCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="gradient-bg">
      <div class="title-container">
        <h1 class="animated-title-sunglass">Sunglasses</h1>
        <div class="glasses-animation-sunglass"></div>
      </div>
      <div className="catalogue-container">
        <div className="catalogue-row">
          <div className="catalogue-col-1">
            <SunglassCategoryList
              categories={categories}
              onSelect={handleSelectCategory}
            />
          </div>
          <div className="catalogue-col-2">
            <SunglassProductList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunglassCategoryCatalogue;
