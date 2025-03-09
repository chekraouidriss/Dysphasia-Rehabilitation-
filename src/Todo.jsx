import React from 'react'
import './Todo.css'
import { useRef,useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import logo from './assets/logowspecialiste.png'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import darklight from './assets/darklight.png'
import logout from './assets/logout.png'
import Base from "./components/Base";
import Listerecordingspecialiste from './components/Patient/Listrecordingspecialiste';
function Todo(){
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    return(
        <Base>
        <div className="parentto">
        <div className="div1to">
            <div className="imagelogo1to">
             <img src={logo} alt="" /> 
            </div> 
            <Link to='/Home_specialiste'>
            <button className="button1to">
                Home
                <div className="imagelogo2to">
                    <img src={overview} alt="" />
                </div>
            </button>
            </Link>
            <button className="button2to"> 
            TODO
            <div className="imagelogo2to">
                    <img src={practice} alt="" />
                </div>
            </button>
            <Link to='/Profile_specialiste'>
            <button className="button3to">
                PROFILE
                <div className="imagelogo2to">
                    <img src={iconpro3} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Enregpat'>
            <button className="button4to">
                ENREG-PAT
                <div className="imagelogo2to">
                    <img src={settings} alt="" />
                </div>
                </button>
            </Link>
            
            <button onClick={toggleDark} className="button5to">
                DARK/LIGHT
                <div className="imagelogo2to">
                    <img src={darklight} alt="" />
                </div>
                </button>
                
            <Link to='/index1'>
            <button className="button6to" > 
            LOGOUT
            <div className="imagelogo3to">
                    <img src={logout} alt="" />
                </div>
            </button>
            </Link>
            
        </div>
        </div>
        <Listerecordingspecialiste/>
    </Base>
    )
}

export default Todo;