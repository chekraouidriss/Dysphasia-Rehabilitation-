import './RecordingListpatient.css';
import React, { useEffect, useState } from 'react';

function RecordingListpatient({ exerciseNumber }) {
    const [userRecordings, setUserRecordings] = useState([]);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        console.log('userEmail:', userEmail);

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
                const getRequest = index.getAll(userEmail);

                getRequest.onsuccess = function(event) {
                    console.log('Enregistrements récupérés avec succès:', event.target.result);
                    setUserRecordings(event.target.result);
                };

                getRequest.onerror = function(event) {
                    console.error('Erreur lors de la récupération des enregistrements:', event.target.error);
                };
            };
        }
    }, []);

    const handleDeleteRecording = (key) => {
        const dbName = 'EnregistrementsDB';
        const request = window.indexedDB.open(dbName, 1);

        request.onerror = function(event) {
            console.error('Erreur lors de l\'ouverture de la base de données.', event);
        };

        request.onsuccess = function(event) {
            console.log('Base de données ouverte avec succès pour la suppression.');
            const db = event.target.result;
            const transaction = db.transaction(['recordings'], 'readwrite');
            const store = transaction.objectStore('recordings');
            const deleteRequest = store.delete(key);

            deleteRequest.onsuccess = function(event) {
                console.log('Enregistrement supprimé avec succès:', key);
                setUserRecordings(prevRecordings => prevRecordings.filter(recording => recording.key !== key));
            };

            deleteRequest.onerror = function(event) {
                console.error('Erreur lors de la suppression de l\'enregistrement:', event.target.error);
            };
        };
    };
    return (
        <div className="recording-list-base-patient11 rounderCorn dropShadow">
            <h2 className='collab-page-title11'>Enregistrement audio&video</h2>
            <div className="collab-page11">
                {userRecordings.map((recording, index) => (
                    <div className="recording-item11" key={recording.key}>
                        {recording.type === 'audio' && (
                            <div>
                                <audio src={recording.url} controls />
                                <button onClick={() => handleDeleteRecording(recording.key)} className='supprimerbtn11'>
                                    <div className='text-supp11'>Supprimer</div>
                                </button>
                                <button className='LEVELbtn11'>
                                    <div className='text-supp11'>LEVEL 1</div>
                                </button>
                                <button className='EXbtn11'>
                                    <div className='text-supp11'>EXERCICE {index + 1}</div>
                                </button>
                            </div>
                        )}
                        {recording.type === 'video' && (
                            <div>
                                <video src={recording.url} controls style={{ width: '23%', maxWidth: '160px', position: 'relative', left: '20px', top: '0px' }} />
                                <button onClick={() => handleDeleteRecording(recording.key)} className='supprimerbtn11'>
                                    <div className='text-supp11'>Supprimer</div>
                                </button>
                                <button className='LEVELbtn11'>
                                    <div className='text-supp11'>LEVEL 1</div>
                                </button>
                                <button className='EXbtn11'>
                                    <div className='text-supp11'>EXERCICE {index + 1}</div>
                                </button>
                            </div>
                        )}
                    </div>
                ))}

                {userRecordings.length === 0 && <p className='msgvide1'>Aucun record media disponible pour le moment.</p>}
            </div>
        </div>
    );
}

export default RecordingListpatient;
