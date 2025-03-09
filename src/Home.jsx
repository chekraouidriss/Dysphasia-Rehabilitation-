import React,{ useRef,useEffect } from "react"
import { Link } from 'react-router-dom'
import logo from './assets/logow.jpg'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import save from './assets/save.jpg'
import darklight from './assets/darklight.png'
import logout from './assets/logout.png'
import person from './assets/profileim.png'
import password from './assets/passwordicon.png'
import stylo from './assets/stylo.png'
import { useState } from "react"
import drawChart from './Chartprofile'
import '../src/components/App.css';
import DashboardTop from "./components/Patient/DashboardTop";
import Base from "./components/Base";
import Dashboardhome from "./components/Patient/Dashboardhome";
import RankStats from "./components/Patient/RankStats";
import ExercisesStats from "./components/Patient/ExercisesStats";
import HoursStats from "./components/Patient/HoursStats";
import ActivityStats from "./components/Patient/ActivityStats";
import FocusStats from "./components/Patient/FocusStats";
import LeaderBoard from "./components/Patient/LeaderBoard";

function Home(){
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    
    return(
        <>
    <Base>
    <div className="parenth">
        <div className="div1h">
            <div className="imagelogo1h">
             <img src={logo} alt="" /> 
            </div> 
            <Link to='/Home'>
            <button className="button1h">
                HOME
                <div className="imagelogo2h">
                    <img src={overview} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Practice'>
            <button className="button2h"> 
            PRACTICE
            <div className="imagelogo2h">
                    <img src={practice} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Profile'>
            <button className="button3h">
                PROFILE
                <div className="imagelogo2h">
                    <img src={iconpro3} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Collab'>
            <button className="button4p">
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
            <button onClick={toggleDark} className="button5h">
                DARK/LIGHT
                <div className="imagelogo2h">
                    <img src={darklight} alt="" />
                </div>
                </button>
                
            <Link to='/Index1'>
            <button className="button6h"> 
            LOGOUT
            <div className="imagelogo3h">
                    <img src={logout} alt="" />
                </div>
            </button>
            </Link>
        </div>
        </div>
        <Dashboardhome>
            <DashboardTop/>
            <LeaderBoard/>
            <RankStats name="" desc="" img=""/>
            <ExercisesStats/>
            <HoursStats/>
            <ActivityStats/>
            <FocusStats/>
        </Dashboardhome>
      </Base>
    
</>
            ) ;  
}

export default Home