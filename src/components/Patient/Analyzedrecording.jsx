import './Analyzedrecording.css';
import React, { useEffect, useState } from 'react';
function ExercisesStats(props) {
    const [recordCount, setRecordCount] = useState(0);

    useEffect(() => {
        // Récupérer l'email depuis le local storage
        const userEmail = localStorage.getItem('userEmail');

        // Utiliser l'email pour récupérer le nombre d'enregistrements correspondant depuis la base de données
        if (userEmail) {
            const dbName = 'EnregistrementsDB';
            const request = window.indexedDB.open(dbName, 1);

            request.onerror = function(event) {
                console.error('Erreur lors de l\'ouverture de la base de données.', event);
            };

            request.onsuccess = function(event) {
                console.log('Base de données ouverte avec succès pour la récupération.');
                const db = event.target.result;
                const transaction = db.transaction(['recordings'], 'readonly');
                const store = transaction.objectStore('recordings');
                const index = store.index('userEmail');
                const getRequest = index.count(userEmail);

                getRequest.onsuccess = function(event) {
                    const count = event.target.result;
                    console.log('Nombre d\'enregistrements récupéré avec succès:', count);
                    setRecordCount(count);
                };

                getRequest.onerror = function(event) {
                    console.error('Erreur lors de la récupération du nombre d\'enregistrements:', event.target.error);
                };
            };
        }
    }, []);
    return(
        <div className="analyse-stats-base rounderCorn dropShadow">
            <p className="analyse-stats-title">Enregistrement analysé</p>
            <div className="analyse-stats-container">
                <p className="analyse-stats-value">{recordCount}</p>
                <p className="analyse-stats-unit">Record</p>
            </div>
        </div>
    );
}

export default ExercisesStats;