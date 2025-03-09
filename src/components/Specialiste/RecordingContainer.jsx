import React, { useState, useEffect, useRef } from 'react';
import './RecordingContainer.css';
import record_icon from '../../../Assets/icons/iconmonstr-microphone-thin.svg';
import record_pause from '../../../Assets/icons/media-control-pause.png';
import recording_icon from '../../../Assets/icons/recording-icon.svg';
import { useReactMediaRecorder } from 'react-media-recorder';

const RecordingContainer = () => {
    const { startRecording, stopRecording, mediaBlobUrl, status } = useReactMediaRecorder({ audio: true });
    const [isRecording, setIsRecording] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const timerRef = useRef(null);
    const userEmail = localStorage.getItem('userEmail'); // Assuming you store the user email in localStorage

    useEffect(() => {
        const uniqueKey = `mediaBlobUrl_${new Date().getTime()}`;

        const convertBlobToDataURL = (blob) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        };

        const storeRecording = async () => {
            if (mediaBlobUrl && userEmail) {
                const dataURL = await convertBlobToDataURL(await fetch(mediaBlobUrl).then(r => r.blob()));
                const dbName = 'EnregistrementsDB';
                const request = window.indexedDB.open(dbName, 1);

                request.onerror = (event) => {
                    console.error('Erreur lors de l\'ouverture de la base de données.', event);
                };

                request.onsuccess = (event) => {
                    console.log('Base de données ouverte avec succès.');
                    const db = event.target.result;
                    const transaction = db.transaction(['recordings'], 'readwrite');
                    const store = transaction.objectStore('recordings');

                    const userRecord = {
                        url: dataURL,
                        type: 'audio',
                        key: uniqueKey,
                        userEmail: userEmail
                    };

                    const addRequest = store.add(userRecord);

                    addRequest.onsuccess = (event) => {
                        console.log('Enregistrement ajouté avec succès.', event.target.result);
                    };

                    addRequest.onerror = (event) => {
                        console.error('Erreur lors de l\'ajout de l\'enregistrement.', event.target.error);
                    };
                };

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    const store = db.createObjectStore('recordings', { keyPath: 'key' });
                    store.createIndex('userEmail', 'userEmail', { unique: false });
                };
            }
        };

        storeRecording();
    }, [mediaBlobUrl, userEmail]);

    const handleStartRecording = () => {
        startRecording();
        setIsRecording(true);
        setElapsedTime(0);
        timerRef.current = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
    };

    const handleStopRecording = () => {
        stopRecording();
        setIsRecording(false);
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="recording-container">
            <div className="recording-info rounderCorn dropShadow">
                <p className="recording-info-title">Recording</p>
                <div className="recording-info-container">
                    <img src={recording_icon} className="recording-info-img" alt=""/>
                </div>
                <p className="recording-info-duration">{formatTime(elapsedTime)}</p>
            </div>
            <div className="recording-record-btn rounderCorn dropShadow" onClick={handleStartRecording}>
                <img src={record_icon} className="recording-icon" alt=""/>
                <p className="recording-text">Record</p>
            </div>
            <div className="recording-pause-btn rounderCorn dropShadow" onClick={handleStopRecording}>
                <img src={record_pause} className="recording-icon" alt=""/>
                <p className="recording-text">Stop</p>
            </div>
            {mediaBlobUrl && (
                <audio src={mediaBlobUrl} controls style={{position:'fixed',width:'302px',left:'1008px',top:'155px'}}/>
            )}
        </div>
    );
};

export default RecordingContainer;
