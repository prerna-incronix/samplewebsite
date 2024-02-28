import React from "react";
import "./assets/product.css";


const CategoryList = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="category-list-container">
      <ul className="category-list">
        <p className="category-header">Categories</p>
        <p className="category-list">Categories:</p>
        <li
          className={selectedCategory === "" ? "active" : ""}
          onClick={() => onSelect("")}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={selectedCategory === category.name ? "active" : ""}
            onClick={() => onSelect(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CategoryList;