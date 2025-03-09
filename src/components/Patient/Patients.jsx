import React, { useState, useEffect } from 'react';
import './Patients.css';

function ExercisesStats() {
    const [patientCount, setPatientCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3002/users1')
            .then(response => response.json())
            .then(data => setPatientCount(data.length))
            .catch(error => console.error('Error fetching patient data:', error));
    }, []);

    return (
        <div className="patient-stats-base rounderCorn dropShadow">
            <p className="patient-stats-title">Patients</p>
            <div className="patient-stats-container">
                <p className="patient-stats-value">{patientCount}</p>
                <p className="patient-stats-unit">patient{patientCount !== 1 ? 's' : ''}</p>
            </div>
        </div>
    );
}

export default ExercisesStats;
