import React, {useEffect, useState} from 'react';
import './RecordingList.css';
import img from '../.././assets/microspecialiste.png';
import {dateToFormated} from "../../timeUtils.js";

function RecordingList({searchEmail, recoveryCode}) {
    const [userRecordings, setUserRecordings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchEmail !== '') {
            setLoading(true);
            setError(null);// Reset error
            const userEmail = localStorage.getItem('userEmail');

            const fetchData = async () => {

                if (recoveryCode === '34342123454') {

                    try {
                        const response = await fetch(`http://localhost:3001/api/review/by-email/email?email=${userEmail}`);
                        const data = await response.json();
                        const mappedRecordings = [];

                        for (const entry of data.data) {
                            const essayResponse = await fetch(`http://localhost:3001/api/essay/${entry.essayId}`);
                            const essayData = await essayResponse.json();
                            mappedRecordings.push({
                                essayId: entry.essayId,
                                reviewId: entry._id,
                                email: essayData.data.email,
                                student: essayData.data.student,
                                exercise: essayData.data.exercise,
                                description: essayData.data.description,
                                recordingDate: essayData.data.date,
                                type: essayData.data.type,
                                recordingContent: essayData.data.content,
                                reviewDate: entry.date,
                                reviewContent: entry.content,
                                evaluation: entry.evaluation
                            });
                        }

                        setUserRecordings(mappedRecordings);
                        console.log(mappedRecordings);
                        setLoading(false);

                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }

                }

            };

            fetchData().then();
            // const dbName = 'EnregistrementsDB';
            // const request = window.indexedDB.open(dbName, 1);
            //
            // request.onerror = function(event) {
            //     setLoading(false);
            //     setError('Erreur lors de l\'ouverture de la base de données.');
            //     console.error('Erreur lors de l\'ouverture de la base de données.', event);
            // };
            //
            // request.onsuccess = function(event) {
            //     console.log('Base de données ouverte avec succès pour la récupération.');
            //     const db = event.target.result;
            //     const transaction = db.transaction(['recordings'], 'readonly');
            //     const store = transaction.objectStore('recordings');
            //     const index = store.index('userEmail');
            //     const getRequest = index.getAll(searchEmail);
            //
            //     getRequest.onsuccess = function(event) {
            //         const recordings = event.target.result;
            //         console.log('Enregistrements récupérés avec succès:', recordings);
            //         setLoading(false);
            //
            //         // Vérifie le code de récupération
            //         if (recoveryCode === '34342123454') {
            //             setUserRecordings(recordings);
            //
            //             // Enregistre le nombre de enregistrements dans le localStorage
            //             localStorage.setItem('userRecordingsCount', recordings.length);
            //         } else {
            //             setError('Code de récupération incorrect.');
            //         }
            //     };
            //
            //     getRequest.onerror = function(event) {
            //         setLoading(false);
            //         setError('Erreur lors de la récupération des enregistrements.');
            //         console.error('Erreur lors de la récupération des enregistrements:', event.target.error);
            //     };
            // };
        }
    }, [searchEmail, recoveryCode]);

    if (loading) {
        return <div>Chargement...</div>;
    }
    return (
        <div className="recording-list-base rounderCorn dropShadow">
            <h2 className='titlesp'>Enregistrements du specialiste</h2>
            {error && <div className="error-message">{error}</div>}
            {userRecordings.map((recording, index) => (
                <div
                    className={recording.evaluation === 'pass' ? 'recording-item13 recording-item-pass' : 'recording-item13 recording-item-retry'}
                    key={index}>
                    <div className="info-controls">
                        <div className="info-container">
                            <p><b>Nom:</b> {recording.student}</p>
                        </div>
                        <div className="info-container">
                            <p><b>Email:</b> {recording.email}</p>
                        </div>
                        <div className="info-container">
                            <p><b>Exercise:</b> {recording.exercise}</p>
                        </div>
                        <div className="info-container">
                            <p><b>Description:</b> {recording.description}</p>
                        </div>
                        <div className="info-container">
                            <p><b>Date de l'essay:</b> {dateToFormated(recording.recordingDate)}</p>
                        </div>
                    </div>

                    {recording.type === 'audio' && (
                        <audio src={'http://localhost:3001/api/audio/' + recording.recordingContent} controls
                               className="media-item-audio"/>
                    )}
                    {recording.type === 'video' && (
                        <video src={'http://localhost:3001/api/video/' + recording.recordingContent} controls
                               className="media-item-video"/>
                    )}
                    <div className="info-controls">
                        <div className="info-container">
                            <p><b>Review Date:</b> {dateToFormated(recording.reviewDate)}</p>
                        </div>
                        <div className="info-container">
                            <p className={recording.evaluation === 'pass' ? 'evaluation-pass' : 'evaluation-retry'}>
                                <b>Evaluation:</b> {recording.evaluation}</p>
                        </div>
                    </div>
                    <audio src={'http://localhost:3001/api/audio/' + recording.reviewContent} controls
                           className="media-item-audio"/>


                </div>
            ))}
        </div>
    );
}

export default RecordingList;
