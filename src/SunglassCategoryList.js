// SunglassCategoryList.js
import React from "react";
import './assets/product.css';

const SunglassCategoryList = ({ categories, onSelect }) => {
    return (
        <div className="category-card">
            <h2>Category</h2>
            <ul>
                <li key="all">
                    <button className='category-button' onClick={() => onSelect(null)}>
                        <p>All</p>
                    </button>
                </li>
                {categories.map(category => (
                    <li key={category.id}>
                        <button className='category-button' onClick={() => onSelect(category.name)}>
                            <p>{category.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SunglassCategoryList;
