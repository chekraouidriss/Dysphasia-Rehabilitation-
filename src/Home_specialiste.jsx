import React from 'react'
import './Home_specialiste.css'
import { useRef,useEffect } from "react"
import { Link } from 'react-router-dom'
import logo from './assets/logowspecialiste.png'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import darklight from './assets/darklight.png'
import logout from './assets/logout.png'
import person from './assets/profileim.png'
import Base from "./components/Base";
import Dashboardhome from "./components/Patient/Dashboardhome";
import DashboardTop from "./components/Patient/DashboardTop";
import Patientsboard from "./components/Patient/Patientsboard";
import Analyzedrecording from "./components/Patient/Analyzedrecording";
import Sessions from "./components/Patient/Sessions";
import Patients from "./components/Patient/Patients";
import Newrecording from "./components/Patient/Newrecording";
import Invitepatient from "./components/Patient/Invitepatient";
function Home_specialiste(){
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    return(
        <>
        <Base>
        <div className="parenthp">
        <div className="div1hp">
            <div className="imagelogo1hp">
             <img src={logo} alt="" /> 
            </div> 
            <Link to='/Home_specialiste'>
            <button className="button1hp">
                Home
                <div className="imagelogo2hp">
                    <img src={overview} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Todo'>
            <button className="button2hp"> 
            TODO
            <div className="imagelogo2hp">
                    <img src={practice} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Profile_specialiste'>
            <button className="button3hp">
                PROFILE
                <div className="imagelogo2hp">
                    <img src={iconpro3} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Enregpat'>
            <button className="button4hp">
                ENREG-PAT
                <div className="imagelogo2hp">
                    <img src={settings} alt="" />
                </div>
                </button>
            </Link>
            
            <button onClick={toggleDark} className="button5hp">
                DARK/LIGHT
                <div className="imagelogo2hp">
                    <img src={darklight} alt="" />
                </div>
                </button>
                
            <Link to='/index1'>
            <button className="button6hp" > 
            LOGOUT
            <div className="imagelogo3hp">
                    <img src={logout} alt="" />
                </div>
            </button>
            </Link>
            
        </div>
        </div>
        <Dashboardhome>
        <DashboardTop/>
        <Patientsboard/>
        <Analyzedrecording/>
        <Sessions/>
        <Patients/>
        <Newrecording/>
        <Invitepatient/>
        </Dashboardhome>
        </Base>
    
</>
    );
}

export default Home_specialiste