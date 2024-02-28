// MainApp.js
import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { categories } from './assets/data/data'; // Import categories

const MainApp = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    return (
        <div>
            <CategoryList categories={categories} onSelect={handleSelectCategory} />
            <ProductList selectedCategory={selectedCategory} />
        </div>
    );
};

export default MainApp;
