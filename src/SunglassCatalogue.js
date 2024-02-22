// SunglassCategoryCatalogue.js
import React, { useState } from "react";
import SunglassCategoryList from "./SunglassCategoryList";
import SunglassProductList from "./SunglassProductList";
import { categories } from './assets/data/data';
import './assets/product.css';

const SunglassCategoryCatalogue = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    return (
        <div>
            <div className="catalogue-header"><h1>Sunglasses</h1></div>
            <div className="catalogue-container">
                <div className="catalogue-row">
                    <div className="catalogue-col-1">
                        <SunglassCategoryList categories={categories} onSelect={handleSelectCategory} />
                    </div>    
                    <div className="catalogue-col-2">
                        <SunglassProductList selectedCategory={selectedCategory} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SunglassCategoryCatalogue;
