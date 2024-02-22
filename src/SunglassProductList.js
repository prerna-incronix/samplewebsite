// SunglassProductList.js
import React, { useState, useEffect } from 'react';
import './assets/product.css';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Make sure this path is correct
import Modal from './Modal'; // Import the Modal component

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Get Firestore database instance

const SunglassProductList = ({ selectedCategory }) => {
    const [productsList, setProductsList] = useState([]);
    const [enlargedImage, setEnlargedImage] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let q;
                if (selectedCategory) {
                    q = query(collection(db, "sunglasses"), where("gender", "==", selectedCategory));
                } else {
                    q = collection(db, "sunglasses");
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

    const openModal = (imageUrl) => {
        setEnlargedImage(imageUrl);
    };

    const closeModal = () => {
        setEnlargedImage(null);
    };

    return (
        <div className='product-list'>
            <ul className="card-info-container">
                {productsList.map((product, index) => (
                    <li key={ index } className='product-item'>
                        <img src={product.imageUrls} alt={product.name} onClick={() => openModal(product.imageUrls)} />
                        <div className="overlay"><p>{product.name}</p></div>
                        {/* {product.modelno} */}
                    </li>
                ))}
            </ul>
            {enlargedImage && <Modal imageUrl={enlargedImage} onClose={closeModal} />}
        </div>
    );
};

export default SunglassProductList;
