import React, {useEffect, useRef, useState} from 'react';
import './RecordingPatient.css';
import img from '../.././assets/microspecialiste.png';
import {useReactMediaRecorder} from "react-media-recorder";
import {dateToFormated} from "../../timeUtils.js";

function RecordingPatient({searchEmail}) {
    const [userRecordings, setUserRecordings] = useState([]);
    const [activeDiv, setActiveDiv] = useState(null);
    const [clickedExercises, setClickedExercises] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [activeRecordingIndex, setActiveRecordingIndex] = useState(null);
    const [recordingStates, setRecordingStates] = useState(false);
    const proId = localStorage.getItem('userId');
    const proEmail = localStorage.getItem('specialistEmail');
    const selectRef = useRef(null);

    const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } = useReactMediaRecorder({ audio: true });


    useEffect( () => {
        const fetchData = async () => {
            if(searchEmail){
                const response = await fetch(`http://localhost:3001/api/essay/by-email/email?email=${searchEmail}`);
                const data = await response.json();
                const mappedData = data.data.map(entry => {

                });
                setUserRecordings(prevState => data.data);
                console.log(data.data);
            }
        }
        fetchData().then();

    }, [searchEmail]);


    const handleDivClick = (index) => {
        const newClickedExercises = [...clickedExercises];
        newClickedExercises[index] = !newClickedExercises[index];
        setClickedExercises(newClickedExercises);

        localStorage.setItem('selectedIndex', index);
    };

    const handleShowModal = (index) => {
        setShowModal(true);
        setActiveRecordingIndex(index);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setActiveRecordingIndex(null);
        clearBlobUrl();
    };

    const storeRecording = async () => {
        if (mediaBlobUrl && activeRecordingIndex !== null) {
            const recording = userRecordings[activeRecordingIndex];
            const formData = new FormData();

            // Fetch the blob from the URL
            const response = await fetch(mediaBlobUrl);
            const blob = await response.blob();
            const file = new File([blob], 'specialist-recording.mp4', { type: blob.type });

            formData.append('audio', file);

            try {
                const contentResponse = await fetch('http://localhost:3001/api/audio/upload', {
                    method: 'POST',
                    body: formData
                });
                const contentData = await contentResponse.json(); // use contentResponse here
                console.log(contentData.data.path);

                // storing the review
                const reviewData = {
                    essayId: recording._id,
                    professionalId: proId,
                    emailPro: proEmail,
                    emailStud: recording.email,
                    date: Date.now(),
                    evaluation: selectRef.current.value,
                    content: contentData.data.path
                };
                console.log('Review data:', reviewData);
                const reviewResponse = await fetch('http://localhost:3001/api/review/', { // use reviewResponse here
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });
                const reviewDataResponse = await reviewResponse.json(); // use reviewResponse here
                console.log(reviewDataResponse);
                if (reviewDataResponse.status === 1) {
                    console.log('Review stored successfully:', reviewDataResponse);

                    // Update the reviewed status of the essay
                    await fetch(`http://localhost:3001/api/essay/reviewed/${recording._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    // Remove the reviewed recording from the list
                    setUserRecordings(prevRecordings =>
                        prevRecordings.filter((_, index) => index !== activeRecordingIndex)
                    );
                }
                // Reset the recording state
                handleCloseModal();
            } catch (error) {
                console.error('Error storing recording:', error);
            }
        }
    };


    return (
        <div className="recording-Patient-base rounderCorn dropShadow">
            <h2 className='Titlepatient'>Liste des enregistrements</h2>
            <div className="collab-pagep">
                {userRecordings.map((recording, index) => (
                    <div className="recording-item13" key={index}>
                        <div className="info-controls">
                            <div className="info-control-more" onClick={() => handleShowModal(index)}>
                                <p>Evaluer</p>
                            </div>
                            <div className="info-container">
                                <p><b>Nom:</b> {recording.student}</p>
                            </div>
                            <div className="info-container">
                                <p><b>Exercise:</b> {recording.exercise}</p>
                            </div>
                            <div className="info-container">
                                <p><b>Description:</b> {recording.description}</p>
                            </div>
                            <div className="info-container">
                                <p><b>Date:</b> {dateToFormated(recording.date)}</p>
                            </div>
                        </div>

                        {recording.type === 'audio' && (
                            <audio src={'http://localhost:3001/api/audio/'+recording.content} controls className="media-item-audio"/>
                        )}
                        {recording.type === 'video' && (
                            <video src={'http://localhost:3001/api/video/'+recording.content} controls className="media-item-video"/>
                        )}

                    </div>
                ))}
                {userRecordings.length === 0 &&
                    <p className='msgvide'>Aucun enregistrement disponible pour le moment.</p>}
                {showModal && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleCloseModal}>×</button>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <h2>Audio Recorder</h2>
                                <p>Status: {status}</p><br />
                                <div>
                                    <button onClick={startRecording} style={{ marginRight: '10px', padding: '10px 20px' }}>Start Recording</button>
                                    <button onClick={stopRecording} style={{ padding: '10px 20px' }}>Stop Recording</button>
                                </div>
                                {mediaBlobUrl && (
                                    <div style={{marginTop: '20px'}}>
                                        <h3>Recorded Audio</h3><br/>
                                        <audio src={mediaBlobUrl} controls/>
                                        <h3 style={{marginTop: '20px'}}>Observation</h3><br/>
                                        <select className="select-value" defaultValue="" style={{marginRight: '10px', padding: '10px 20px'}} ref={selectRef}>
                                            <option value="" disabled hidden>Choisir</option>
                                            <option value="pass">Pass</option>
                                            <option value="retry">Retry</option>
                                        </select>
                                        <button onClick={storeRecording}
                                                style={{marginTop: '20px', padding: '10px 20px'}}>Store Recording
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecordingPatient
