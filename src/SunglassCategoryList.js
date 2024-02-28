// SunglassCategoryList.js
import React from "react";
import './assets/product.css'; // Import the CSS file
import './assets/product.css'; // Import the CSS file

const SunglassCategoryList = ({ categories, onSelect }) => {
    return (
        <div className="category-list-container"> {/* Apply category-list-container class */}
        
            <ul className="category-list"> {/* Apply category-list class */}
            <p className="category-list">Categories:</p>
                <li onClick={() => onSelect("")}>All</li>
                {categories.map(category => (
                    <li key={category.id} onClick={() => onSelect(category.name)}>
                        {category.name}
                   
                    </li>
                ))}
            </ul> 
             
        </div>
    );
}

                export default SunglassCategoryList;
