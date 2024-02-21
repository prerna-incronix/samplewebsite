//CategoryCatelogue.js

import React, {useState} from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { categories, products } from './assets/data/data';
import './assets/product.css';

const CategoryCatalogue = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory.id)
        : products;

    return (
        <div>
            <div className="catalogue-header"><h1>Eyewear</h1></div>
            <div className="catalogue-container">
                <div className="catalogue-row">
                    <div className="catalogue-col-1">
                        <CategoryList categories={categories} onSelect={handleCategorySelect} />
                    </div>    
                    <div className="catalogue-col-2">
                        <ProductList products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCatalogue;