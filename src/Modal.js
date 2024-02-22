// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={imageUrl} alt="Enlarged Product" />
            </div>
        </div>
    );
};

export default Modal;
