import React, { useState } from 'react';
import './SearchPatientModal.css';

function SearchPatientModal({ showModal, onClose }) {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');

    const handleSearch = () => {
        console.log('Chercher:', { nom, prenom, email });
        onClose(email);
    };

    if (!showModal) return null;

    return (
        <div className="modal-overlay12">
            <div className="modal12">
                <h2 className="textsearch12">Rechercher des enregistrements de patients:</h2>
                <input 
                    type="text" 
                    placeholder="Nom" 
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Prénom" 
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                 <button onClick={handleSearch}>Chercher</button>
                <button onClick={() => onClose('')}>Fermer</button>
                
            </div>
        </div>
    );
}

export default SearchPatientModal;
