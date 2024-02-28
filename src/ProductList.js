// productList.js
import React, { useState, useEffect } from 'react';
import "./assets/product.css";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Make sure this path is correct
import Modal from './Modal'; // Import the Modal component

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Get Firestore database instance

const EyewearList = ({ selectedCategory }) => {
    const [productsList, setProductsList] = useState([]);
    const [selectedProductImages, setSelectedProductImages] = useState([]);
    const [selectedProductModelNo, setSelectedProductModelNo] = useState(null);

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

    const openModal = (modelno) => {
        const product = productsList.find(product => product.modelno === modelno);
        setSelectedProductImages(product.imageUrls);
        setSelectedProductModelNo(product.modelno); // Set the selected model number
    };

    const closeModal = () => {
        setSelectedProductImages([]);
        setSelectedProductModelNo(null);
    };

    return (
        <div className='product-list'>
            <ul className="card-info-container">
                {productsList.map((product, index) => (
                    <li key={index} className='product-item'>
                        <img src={product.imageUrls[0]} alt={product.name} onClick={() => openModal(product.modelno)} />
                        <div className="overlay">{product.name}</div>
                        {/* <div className="overlay">{product.modelno}</div> */}
                        {/* <p>{product.name}</p> */}
                    </li>
                ))}
            </ul>
            {selectedProductModelNo && (
                <Modal
                    imageUrls={selectedProductImages}
                    modelNo={selectedProductModelNo} // Pass the selected model number to the Modal
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default EyewearList;
