import React, { useState } from "react";
import './Collab.css';
import { Link } from 'react-router-dom';
import logo from './assets/logow.jpg';
import iconpro3 from './assets/personiconx.png';
import practice from './assets/practice.png';
import overview from './assets/overview.png';
import settings from './assets/collab.png';
import save from './assets/save.jpg';
import darklight from './assets/darklight.png';
import logout from './assets/logout.png';
import person from './assets/profileim.png';
import password from './assets/passwordicon.png';
import stylo from './assets/stylo.png';
import drawChart from './Chartprofile';
import DashboardTop from "./components/Patient/DashboardTop";
import Base from "./components/Base";
import RecordingList from "./components/Patient/RecordingList";
import Dashboard from "./components/Patient/Dashboard";
import SpecialistInfo from "./components/Patient/SpecialistInfo";
import CollabStatsContainer from "./components/Patient/CollabStatsContainer";
import SearchspecialisteModal from "./components/Specialiste/SearchspecialisteModal";

function Collab() {
    const [showModal, setShowModal] = useState(true);
    const [searchEmail, setSearchEmail] = useState('');
    const [recoveryCode, setRecoveryCode] = useState('');
    const userEmail = localStorage.getItem('userEmail'); // Assuming you store the user email in localStorage

    const handleModalClose = (email, code) => {
        setShowModal(false);
        setSearchEmail(email);
        setRecoveryCode(code);
    };

    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
        <Base>
            <div className="parenth">
                <div className="div1h">
                    <div className="imagelogo1h">
                        <img src={logo} alt="" />
                    </div>
                    <Link to='/Home'>
                        <button className="button1c">
                            HOME
                            <div className="imagelogo2h">
                                <img src={overview} alt="" />
                            </div>
                        </button>
                    </Link>
                    <Link to='/Practice'>
                        <button className="button2c">
                            PRACTICE
                            <div className="imagelogo2h">
                                <img src={practice} alt="" />
                            </div>
                        </button>
                    </Link>
                    <Link to='/Profile'>
                        <button className="button3c">
                            PROFILE
                            <div className="imagelogo2h">
                                <img src={iconpro3} alt="" />
                            </div>
                        </button>
                    </Link>
                    <Link to='/Collab'>
                        <button className="button4d">
                            COLLAB
                            <div className="imagelogo2p">
                                <img src={settings} alt="" />
                            </div>
                        </button>
                    </Link>
                    <Link to='/Enreg'>
                        <button className="enregistrement">
                            ENREG
                            <div className='imagelogo2p'>
                                <img src={save} alt="" />
                            </div>
                        </button>
                    </Link>
                    <button onClick={toggleDark} className="button5c">
                        DARK/LIGHT
                        <div className="imagelogo2h">
                            <img src={darklight} alt="" />
                        </div>
                    </button>
                    <Link to='/Index1'>
                        <button className="button6c">
                            LOGOUT
                            <div className="imagelogo3h">
                                <img src={logout} alt="" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            <Dashboard>
                <SpecialistInfo />
                <RecordingList searchEmail={searchEmail} recoveryCode={recoveryCode} userEmail={userEmail} />
                <CollabStatsContainer />
                <SearchspecialisteModal showModal={showModal} onClose={handleModalClose} />
            </Dashboard>
        </Base>
    );
}

export default Collab;
