import React, { useState, useEffect } from 'react';
import './SpecialistInfo.css';
import img from '../../../src/assets/profileim.png';

function SpecialistInfo(props){
    const [specialistData, setSpecialistData] = useState(null);

    // Récupération de l'e-mail depuis le stockage local
    const storedEmail = localStorage.getItem('email');

    useEffect(() => {
        // Fonction pour récupérer les données du spécialiste depuis l'API
        const fetchSpecialistData = async () => {
            try {
                const response = await fetch('http://localhost:3002/specialiste1');
                if (response.ok) {
                    const data = await response.json();
                    // Filtrer les données pour trouver le spécialiste correspondant à l'e-mail
                    const specialist = data.find(specialist => specialist.email === storedEmail);
                    setSpecialistData(specialist);
                } else {
                    console.error('Failed to fetch specialist data');
                }
            } catch (error) {
                console.error('Error fetching specialist data:', error);
            }
        };

        // Vérification si l'e-mail est présent avant de faire la requête
        if (storedEmail) {
            fetchSpecialistData();
        }
    }, [storedEmail]);

    return (
        <div className="specialist-info-base rounderCorn dropShadow">
            <div className="specialist-info-user-img-container">
                <img src={img} alt="Profile Picture" className="specialist-profile-img"/>
                {specialistData ? (
                    <>
                        <p className="specialist-info-name">{specialistData.nom} {specialistData.prenom}</p>
                        <p className="specialist-info-sub-name">Specialist</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default SpecialistInfo;
