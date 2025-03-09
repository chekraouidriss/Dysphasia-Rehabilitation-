import React, { useEffect, useState } from 'react';
import './Sessions.css';

function ExercisesStats() {
    const [totalRecordCount, setTotalRecordCount] = useState(0);

    useEffect(() => {
        const dbName = 'EnregistrementsDB';
        const request = window.indexedDB.open(dbName, 1);

        request.onerror = function(event) {
            console.error('Erreur lors de l\'ouverture de la base de données.', event);
        };

        request.onsuccess = function(event) {
            console.log('Base de données ouverte avec succès pour la récupération du nombre total d\'enregistrements.');
            const db = event.target.result;
            const transaction = db.transaction(['recordings'], 'readonly');
            const store = transaction.objectStore('recordings');
            const countRequest = store.count();

            countRequest.onsuccess = function(event) {
                const count = event.target.result;
                console.log('Nombre total d\'enregistrements récupéré avec succès:', count);
                setTotalRecordCount(count);
            };

            countRequest.onerror = function(event) {
                console.error('Erreur lors de la récupération du nombre total d\'enregistrements:', event.target.error);
            };
        };
    }, []);

    return (
        <div className="session-stats-base rounderCorn dropShadow">
            <p className="session-stats-title">Total des enregistrements</p>
            <div className="session-stats-container">
                <p className="session-stats-value">{totalRecordCount}</p>
                <p className="session-stats-unit">Record</p>
            </div>
        </div>
    );
}

export default ExercisesStats;
