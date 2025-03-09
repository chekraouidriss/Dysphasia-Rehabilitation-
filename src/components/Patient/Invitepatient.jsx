import React, { useState } from 'react';
import './Invitepatient.css';
import invite from '../../../src/assets/invite.png';

function ExercisesStats(props) {
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Example API call to invite a patient
        fetch('http://localhost:3002/invite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            if (data.success) {
                setMessage('Invitation envoyée avec succès !');
            } else {
                setMessage('Erreur lors de l\'envoi de l\'invitation. Veuillez réessayer.');
            }
        })
        .catch(error => {
            setLoading(false);
            setMessage('Erreur de réseau. Veuillez réessayer plus tard.');
            console.error('Error inviting patient:', error);
        });
    };

    return (
        <div className='invitepatient-stats-base'>
            <div className='inviteimg'>
                <img src={invite} alt="Invite" />
            </div>
            <p className='titleinvite'>Invitez votre patient</p>
            <p className='txtinvite'>Ajoutez votre patient à la plateforme</p>
            <button className='btninvite' onClick={handleInviteClick}>Invitez a patient</button>

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
                                {loading ? 'Envoi en cours...' : 'Envoyer l\'invitation'}
                            </button>
                        </form>
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExercisesStats;
