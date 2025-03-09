import React, { useState } from 'react';
import './RecordingResult.css'; // Assurez-vous que le fichier CSS est correctement importé
import retryIcon from '../../../Assets/icons/iconmonstr-redo-7.svg';
import goodIcon from '../../../Assets/icons/iconmonstr-check-mark-lined.svg';

const RecordingResult = () => {
    // Définition des états pour suivre le bouton cliqué
    const [retryClicked, setRetryClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);

    // Fonction pour basculer l'état du bouton et réinitialiser l'autre bouton
    const toggleRetry = () => {
        setRetryClicked(!retryClicked);
        setPassClicked(false); // Réinitialisation de l'autre bouton
    };

    // Fonction pour basculer l'état du bouton et réinitialiser l'autre bouton
    const togglePass = () => {
        setPassClicked(!passClicked);
        setRetryClicked(false); // Réinitialisation de l'autre bouton
    };

    return (
        <div className="recording-result-container">
            {/* Gestion de la classe CSS en fonction de l'état */}
            <div
                className={`recording-result-retry dropShadow ${retryClicked ? 'retry-clicked' : ''}`}
                onClick={toggleRetry}
            >
                <img className="recording-result-btn-icon" src={retryIcon} alt=""/>
                <p className="recording-result-btn-text">Retry</p>
            </div>
            {/* Gestion de la classe CSS en fonction de l'état */}
            <div
                className={`recording-result-good dropShadow ${passClicked ? 'pass-clicked' : ''}`}
                onClick={togglePass}
            >
                <img className="recording-result-btn-icon" src={goodIcon} alt=""/>
                <p className="recording-result-btn-text">Pass</p>
            </div>
        </div>
    );
}

export default RecordingResult;
