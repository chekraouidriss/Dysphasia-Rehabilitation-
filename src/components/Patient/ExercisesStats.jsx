import React, { useState, useEffect } from 'react';
import './ExercisesStats.css';

function ExercisesStats() {
    const [exercisesCompleted, setExercisesCompleted] = useState(0);

    useEffect(() => {
        // Récupérer le nombre d'exercices terminés depuis localStorage
        const savedExercisesCompleted = parseInt(localStorage.getItem('exercisesCompleted'), 10) || 0;
        setExercisesCompleted(savedExercisesCompleted);
    }, []); // Se déclenche uniquement au chargement initial

    return (
        <div className="exercises-stats-base roundedCorn dropShadow">
            <p className="exercises-stats-title">Exercices terminés</p>
            <div className="exercises-stats-container">
                <p className="exercises-stats-value">{exercisesCompleted}</p>
                <p className="exercises-stats-unit">EXERCICE{exercisesCompleted > 1 ? 'S' : ''}</p>
            </div>
        </div>
    );
}

export default ExercisesStats;
