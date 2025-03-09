import React from 'react';
import './RecordingPreviewContainer.css';
import play_icon from "../../../Assets/icons/iconmonstr-media-control-48.svg";
import kkk from '../../../src/assets/Analyserecording.png';

const RecordingPreviewContainer = (props) => {
    const handleNext = () => {
        window.location.reload(); // Rafraîchir la page lorsque vous cliquez sur "Suivant"
    };

    return (
        <div className="recording-preview-container">
            <div className="recording-player-container rounderCorn dropShadow">
                <img className='analyseimg' src={kkk} alt=""/>
            </div>
            <div className="recording-player-control rounderCorn dropShadow" onClick={handleNext}>
                <img src={play_icon} className="control-icon" alt=""/>
                <p className="control-text">Suivant</p>
            </div>
            <div className="recording-player-volume rounderCorn dropShadow">
                <div className='analyse'>Aucun audio enregistré pour le moment...</div>
            </div>
        </div>
    );
}

export default RecordingPreviewContainer;
