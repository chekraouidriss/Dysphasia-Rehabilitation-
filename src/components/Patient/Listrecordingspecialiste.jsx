import './Listerecordingspecialiste.css';
import React, { useEffect, useState } from 'react';
import img from '../../../src/assets/specialistefile.png';
import {dateToFormated} from "../../timeUtils.js";

function Listerecordingspecialiste() {
    const [userRecordings, setUserRecordings] = useState([]);

    useEffect(() => {
        const userEmail = localStorage.getItem('specialistEmail');
        console.log('userEmail:', userEmail);

        const fetchData = async () => {
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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then();



    }, []);

    const handleDeleteReview = async (indexSelected, essayId, reviewId) => {
        try{
            const reviewResponse = await fetch(`http://localhost:3001/api/essay/reviewed/${essayId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const reviewData = await reviewResponse.json();
            console.log(reviewData);
            if(reviewData.status === 1 ){
                const response = await fetch(`http://localhost:3001/api/review/${reviewId}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                if (data.status === 1) {
                    // Review deleted successfully
                    console.log('Review deleted successfully.');
                } else {
                    // Error deleting review
                    console.error('Error deleting review:', data.message);
                }
                // Remove the reviewed recording from the list
                setUserRecordings(prevRecordings =>
                    prevRecordings.filter((_, index) => index !== indexSelected)
                );
            }
        } catch(error){
            console.error('Error fetching data:', error);
        }



    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleInviteClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEmail('');
        setMessage('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setMessage('');}
    //     fetch('http://localhost:3002/envoyerrecordtopatient', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         setLoading(false);
    //         if (data.success) {
    //             setMessage('Le code de récupération a été envoyé avec succès.!');
    //         } else {
    //             setMessage('Erreur lors de l\'envoi du code. Veuillez réessayer.');
    //         }
    //     })
    //     .catch(error => {
    //         setLoading(false);
    //         setMessage('Erreur de réseau. Veuillez réessayer plus tard.');
    //         console.error('Error inviting patient:', error);
    //     });
    //     const updateRecordCount = (recordings) => {
    //         setRecordCount(recordings.length);
    //         localStorage.setItem('recordCount', recordings.length); // Stocker dans le localStorage
    //     };
        
    return (
        <div className="recording-listspecialiste-base rounderCorn dropShadow">
            <h2 className='titletodo'>Liste des enregistrements du specialiste</h2>
            <button className='envoyerpatient'  onClick={handleInviteClick}> <div className='txtenvp'>Envoyer a votre patient</div></button>
            {isModalOpen && (
                <div className="modal1">
                    <div className="modal-content1">
                        <span className="close1" onClick={handleModalClose}>&times;</span>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Email du patient:
                                <input type="email" value={email} onChange={handleEmailChange} required />
                            </label>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Envoi en cours...' : 'Envoyer Le code de récupération'}
                            </button>
                        </form>
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>
            )}
            <div className="recording-list-specialiste1">
                {userRecordings.map((recording, index) => (
                    <div className={recording.evaluation === 'pass' ?'recording-item13 recording-item-pass' : 'recording-item13 recording-item-retry'} key={index}>
                        <div className="info-controls">
                            <div className="info-control-delete" onClick={() => handleDeleteReview(index, recording.essayId, recording.reviewId)}>
                                <p>Supprimer</p>
                            </div>
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
                                <p className={recording.evaluation === 'pass' ?'evaluation-pass' : 'evaluation-retry'}><b>Evaluation:</b> {recording.evaluation}</p>
                            </div>
                        </div>
                        <audio src={'http://localhost:3001/api/audio/' + recording.reviewContent} controls
                               className="media-item-audio"/>


                    </div>
                ))}

                {userRecordings.length === 0 &&
                    <p className='msgvide-specialiste'>Aucun record media disponible pour le moment.</p>}
            </div>
        </div>
    );
}

export default Listerecordingspecialiste;
