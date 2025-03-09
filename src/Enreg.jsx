import React,{ useRef,useEffect } from "react"
import { useLocation } from 'react-router-dom';
import './Enreg.css'
import { Link } from 'react-router-dom'
import logo from './assets/logow.jpg'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import save from './assets/save.jpg'
import darklight from './assets/darklight.png'
import micro from './assets/micro.png'
import rec from './assets/rec.png'
import logout from './assets/logout.png'
import queryString from "query-string";
import RecordingListpatient from "./components/Patient/RecordingListpatient";

function Enreg(){
    const location = useLocation();
    const { search } = location;
    const { exerciseNumber } = queryString.parse(search);
    useEffect(() => {
        console.log('exerciseNumber:', exerciseNumber); // Vérifier la valeur de exerciseNumber
    }, [exerciseNumber]);
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");}
    
    return(  
        
        <><div className="parenth">
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
                    <button className="button4c">
                        COLLAB
                        <div className="imagelogo2p">
                            <img src={settings} alt="" />
                        </div>
                    </button>
                </Link>
                <Link to='/Enreg'>
                    <button className="enregistremente">
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
            <div className="microphone"> <img src={micro} alt=""/></div>
            <div className="record"> <img src={rec} alt=""/></div>
        </div><RecordingListpatient exerciseNumber={exerciseNumber} /></>
     
    
        
    );
}

export default Enreg