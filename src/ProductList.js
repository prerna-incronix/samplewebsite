// ProductList.js
import React, { useState, useEffect } from 'react';
import './assets/product.css';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Make sure this path is correct
import { products } from './assets/data/data';

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Get Firestore database instance

const ProductList = ({ selectedCategory }) => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let q;
                if (selectedCategory) {
                    q = query(collection(db, "products"), where("gender", "==", selectedCategory));
                } else {
                    q = collection(db, "products");
                }
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductsList(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [selectedCategory]); // Re-fetch when selectedCategory changes

    return (
        <div className='product-list'>
            <ul className="card-info-container">
                {productsList.map((product, index) => (
                    <li key={ index } className='product-item'>
                        <img src={product.imageUrls} alt={product.name} />
                        <div className="overlay"><p>{product.name}</p></div>
                        {/* {product.modelno} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
