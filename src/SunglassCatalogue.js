//SunglassCatalogue.js

import React, {useState} from "react";
import SunglassCategoryList from "./SunglassCategoryList";
import SunglassProductList from "./SunglassProductList";
import { categories, products } from './assets/data/data';
import './assets/styles.css';

const SunglassCatalogue = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory.id)
        : products;

    return (
        <div>
            <div className="catalogue-header">
                <h1>Sunglasses</h1>
            </div>
            <div className="catalogue-container">
                <div className="catalogue-row">
                    <div className="catalogue-col-1">
                        <SunglassCategoryList categories={categories} onSelect={handleCategorySelect} />
                    </div>    
                    <div className="catalogue-col-2">
                        <SunglassProductList products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SunglassCatalogue;