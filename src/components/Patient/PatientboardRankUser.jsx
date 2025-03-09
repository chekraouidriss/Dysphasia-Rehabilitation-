import './LeaderboardRankUser.css';
import React, { useEffect, useState } from 'react';

function LeaderboardRankUser(props) {
    const [recordCount, setRecordCount] = useState(0);

    useEffect(() => {
        const userEmail = props.email;  // Use email from props
        const dbName = 'EnregistrementsDB';
        const request = indexedDB.open(dbName, 1);

        request.onerror = function(event) {
            console.error('Erreur lors de l\'ouverture de la base de données.', event);
        };

        request.onsuccess = function(event) {
            console.log('Base de données ouverte avec succès pour la récupération.');
            const db = event.target.result;
            const transaction = db.transaction(['recordings'], 'readonly');
            const store = transaction.objectStore('recordings');
            const index = store.index('userEmail');
            const getAllRequest = index.getAll(userEmail);

            getAllRequest.onsuccess = function(event) {
                const recordings = event.target.result;
                console.log('Enregistrements récupérés avec succès:', recordings);
                setRecordCount(recordings.length);
            };

            getAllRequest.onerror = function(event) {
                console.error('Erreur lors de la récupération des enregistrements.', event);
            };
        };

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            const store = db.createObjectStore('recordings', { keyPath: 'key' });
            store.createIndex('userEmail', 'userEmail', { unique: false });
        };
    }, [props.email]);

    return (
        <div className="leader-board-user">
            <div className="leader-board-user-img">
                <img src={props.img} alt="Profile Picture" className="profile-img-rank" />
            </div>
            <div className="leader-board-user-data">
                <p className="leader-board-user-name">{props.name}</p>
                <p className="leader-board-user-extra">{props.extras}</p>
            </div>
            <div className="leader-board-user-rank">
                <p className="leader-board-user-rank-number">
                    <button className='recordnumber'>
                        <div className='textbtn'>{recordCount} Records</div>
                    </button>
                </p>
            </div>
        </div>
    );
}

export default LeaderboardRankUser;
