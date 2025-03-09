import React, { useEffect, useState } from 'react';
import './CollabStatsContainer.css';

function CollabStatsContainer(){
    const [totalScores, setTotalScores] = useState(0); // Initialiser avec 0
    const [isLoading, setIsLoading] = useState(true); // Ajout de l'état de chargement

    useEffect(() => {
        const totalScoresFromLocalStorage = localStorage.getItem('userRecordingsCount');
        if (totalScoresFromLocalStorage !== null) {
            setTotalScores(parseInt(totalScoresFromLocalStorage));
        }
        setIsLoading(false); // Désactivation de l'état de chargement une fois les données récupérées
        console.log('Valeur de totalScores récupérée depuis le localStorage :', totalScoresFromLocalStorage);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Afficher un message de chargement tant que les données sont en cours de récupération
    }

    return(
        <div className="collab-stats-container-base">
            <div className="good-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Good Scores</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">0</p>
                </div>
            </div>
            <div className="bad-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Bad Scores</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">0</p>
                </div>
            </div>
            <div className="total-grade-stats-container rounderCorn dropShadow">
                <p className="collab-stats-title">Total</p>
                <div className="collab-stats-container">
                    <p className="collab-stats-value">{totalScores}</p>
                </div>
            </div>
        </div>
    );
}

export default CollabStatsContainer;
