import React, { useState, useEffect } from 'react';
import './SearchspecialisteModal.css';
import SpecialistInfo from '../Patient/SpecialistInfo';

function SearchspecialisteModal({ showModal, onClose }) {
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');

    // Récupération de l'e-mail depuis le stockage local lors de l'initialisation du composant
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleSearch = () => {
        console.log('Chercher:', { code, email });
        // Stockage de l'e-mail dans le stockage local avant de fermer le modal
        localStorage.setItem('email', email);
        onClose(email, code);
    };

    if (!showModal) return null;
    return (
        <div className="modal-overlay123">
            <div className="modal123">
                <h2 className="textsearch123">Récupérez les enregistrements de votre spécialiste.</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Code de récupération" 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button onClick={handleSearch}>Chercher</button>
                <button onClick={() => onClose('', '')}>Fermer</button>
            </div>
        </div>
    );
}

export default SearchspecialisteModal;
