import React, {useState, useEffect} from 'react';
import './Enregpat.css';
import {Link} from 'react-router-dom';
import logo from './assets/logowspecialiste.png';
import iconpro3 from './assets/personiconx.png';
import practice from './assets/practice.png';
import overview from './assets/overview.png';
import settings from './assets/collab.png';
import darklight from './assets/darklight.png';
import logout from './assets/logout.png';
import Base from "./components/Base";
import SearchPatientModal from './components/Patient/SearchPatientModal';
import RecordingPatient from './components/Patient/RecordingPatient';
import RecordingPreviewContainer from './components/Specialiste/RecordingPreviewContainer';
import RecordingContainer from './components/Specialiste/RecordingContainer';
import RecordingResult from './components/Specialiste/RecordingResult';

function Enregpat() {
    const [showModal, setShowModal] = useState(true);
    const [searchEmail, setSearchEmail] = useState('');
    useEffect(() => {
        // Récupérer l'email depuis le localStorage
        const userEmail = localStorage.getItem('userEmail');
        console.log("Email récupéré depuis le localStorage:", userEmail);
    }, []);

    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    const handleModalClose = (email) => {
        setShowModal(false);
        setSearchEmail(email);
    };

    return (
        <Base>
            <div className="parenten">
                <div className="div1en">
                    <div className="imagelogo1en">
                        <img src={logo} alt=""/>
                    </div>
                    <Link to='/Home_specialiste'>
                        <button className="button1en">
                            Home
                            <div className="imagelogo2en">
                                <img src={overview} alt=""/>
                            </div>
                        </button>
                    </Link>
                    <Link to='/Todo'>
                        <button className="button2hp">
                            TODO
                            <div className="imagelogo2hp">
                                <img src={practice} alt=""/>
                            </div>
                        </button>
                    </Link>
                    <Link to='/Profile_specialiste'>
                        <button className="button3en">
                            PROFILE
                            <div className="imagelogo2en">
                                <img src={iconpro3} alt=""/>
                            </div>
                        </button>
                    </Link>
                    <Link to='/Enregpat'>
                        <button className="button4en">
                            ENREG-PAT
                            <div className="imagelogo2en">
                                <img src={settings} alt=""/>
                            </div>
                        </button>
                    </Link>

                    <button onClick={toggleDark} className="button5en">
                        DARK/LIGHT
                        <div className="imagelogo2en">
                            <img src={darklight} alt=""/>
                        </div>
                    </button>

                    <Link to='/index1'>
                        <button className="button6en">
                            LOGOUT
                            <div className="imagelogo3en">
                                <img src={logout} alt=""/>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            {/*<RecordingPreviewContainer/>*/}
            <RecordingPatient searchEmail={searchEmail}/>
            {/*<RecordingContainer/>*/}
            {/*<RecordingResult/>*/}
            <SearchPatientModal showModal={showModal} onClose={handleModalClose}/>
        </Base>

    )
}

export default Enregpat;
