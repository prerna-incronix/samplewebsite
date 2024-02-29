// SunglassCategoryList.js
import React, { useState } from "react";
import "./assets/product.css";

const SunglassCategoryList = ({ categories, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleSelect = (categoryName) => {
    setActiveCategory(categoryName);
    onSelect(categoryName);
  };

  return (
    <div className="category-list-container">
      <ul className="category-list">
        <p className="category-header">Categories:</p>
        <li
          className={activeCategory === "" ? "active" : ""}
          onClick={() => handleSelect("")}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={activeCategory === category.name ? "active" : ""}
            onClick={() => handleSelect(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SunglassCategoryList;
