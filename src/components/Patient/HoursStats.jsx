import './HoursStats.css'
import React, { useState, useEffect } from 'react';

function HoursStats() {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedSeconds(prevElapsedSeconds => prevElapsedSeconds + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
 
    useEffect(() => {
        const storedStartTime = localStorage.getItem('startTime');
        if (storedStartTime) {
            const startTime = parseInt(storedStartTime, 10);
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000);
            setElapsedSeconds(elapsedTime);
        } else {
            localStorage.setItem('startTime', Date.now().toString());
        }
    }, []);

    const hours = Math.floor(elapsedSeconds / 3600);
    const remainingSeconds = elapsedSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const displayHours = hours < 10 ? `0${hours}` : hours;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="hours-stats-base rounderCorn dropShadow">
            <p className="hours-stats-title">Heures passées</p>
            <div className="hours-stats-container">
                <p className="hours-stats-value">{displayHours}:{displayMinutes}:{displaySeconds}</p>
                <p className="hours-stats-unit">HEURES</p>
            </div>
        </div>
    );
}

export default HoursStats;
