// Modal.js
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ imageUrls, modelNo, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <button className="prev" onClick={prevImage}>&#10094;</button>
                <img src={imageUrls[currentImageIndex]} alt="Enlarged Product" />
                <button className="next" onClick={nextImage}>&#10095;</button>
                <div className="model-no-container"> {/* Container for label and model number */}
                    <div className="model-no-label">Model No:</div> {/* Label */}
                    <div className="model-no">{modelNo}</div> {/* Model number */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
