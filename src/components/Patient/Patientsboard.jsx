import './Patientsboard.css';
import React, { useState, useEffect } from 'react';
import LeaderboardRankUser from "./PatientboardRankUser";
import img from '../../../src/assets/profileim.png'

function LeaderBoard(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/users1')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);
    return(
        <div className="patient-board-base  rounderCorn dropShadow">
            <p className="patient-board-stats-title">Patients</p>
            <div className="patient-board-stats-container">
            {users.map((user, index) => (
                    <LeaderboardRankUser
                        key={user._id}
                        img={img}
                        name={`${user.prenom} ${user.nom}`}
                        extras={user.email}
                        email={user.email} 
                        rank={index + 1}
                    />
                ))}
                
                
            </div>
        </div>
    );
}

export default LeaderBoard;