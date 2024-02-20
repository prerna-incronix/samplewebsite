//SunglassProductList.js
import React from 'react';
import './assets/styles.css';

const SunglassProductList = ({ products }) => {


    return (
        <div className='product-list'>
            <ul className="card-info-container">

            {products.map(product => (
                    <li key={product.id} className='product-item'>
                        <img src={product.image} alt={product.name} />
                        <div className="overlay">{product.model}</div>
                        <p>{product.name}</p>
                    </li>
                ))}
                </ul>
        </div>
    )
}

export default SunglassProductList;
