import React, { useState, useEffect } from 'react';
import './LeaderBoard.css';
import LeaderboardRankUser from "./LeaderboardRankUser";
import img from '../../../src/assets/profileim.png';

function LeaderBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/users1')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="leader-board-base rounderCorn dropShadow">
            <p className="leader-board-stats-title">Classement</p>
            <div className="leader-board-stats-container">
                {users.map((user, index) => (
                    <LeaderboardRankUser
                        key={user._id} // Assuming each user has a unique _id field
                        img={img}
                        name={`${user.prenom} ${user.nom}`}
                        extras={user.email}
                        rank={index + 1}
                    />
                ))}
            </div>
        </div>
    );
}

export default LeaderBoard;
