import React, {useEffect} from 'react'
import Talkease from './assets/TT.jpg'
import './Index1.css'
import Talkease1 from './assets/TT.jpg'

import { useState } from 'react'


function Index1(){

     // Fonction pour réinitialiser le nombre d'exercices terminés à zéro
    useEffect(() => {
        localStorage.setItem('exercisesCompleted', '0');
    }, []);

    const toggleMobileNavigation = () => {
        const mobileNavigation = document.getElementById("mobile-sidenav");
        mobileNavigation.classList.toggle('mobile-links-active');
    };
    return(
      <div>
      <div className="nav-section w3-highway-blue">
        <nav className="nav-container w3-padding-large">
          <div className="logo-section">
            <a href="#home">Talk<span>ease</span></a>
          </div>
          <div className="mobile-button">
            <span style={{ float: 'right' }} onClick={toggleMobileNavigation}>&#9776;</span>
          </div>
          <div className="nav-links">
            <a href="/Index1">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="/Signup_specialiste">Specialiste</a>
            
          </div>
          <div id="mobile-sidenav" className="mobile-links w3-highway-blue">
            <div className="mobile-logo" style={{ display: 'inline' }}>
              <a href="#home" className="logo">TALK<span>EASE</span></a>
              <span style={{ width: '100%' }}></span>
              <a href="javascript:void(0)" className="closebtn" onClick={toggleMobileNavigation}>&times;</a>
            </div>
            <a href="#about" onClick={toggleMobileNavigation}>About Us</a>
            <a href="#services" onClick={toggleMobileNavigation}>Services</a>
            <a href="#careers" onClick={toggleMobileNavigation}>Careers</a>
            <a href="#contact" onClick={toggleMobileNavigation}>Contact</a>
          </div>
        </nav>

      </div>
      <div className="hero-section" id="home">
        <div className="text-container">
          <p className="pre-title">One step for your success</p>
          <h1 className="main-title">TALK<span>EASE</span></h1>
          <p className="post-title">Communicate with the rest of the world!</p>
          <a className="cta-button w3-button w3-round-large w3-indigo w3-hover-blue" href="/Signup">Sign Up Now</a>
          <a className="cta-button w3-button w3-round-large w3-indigo w3-hover-blue top-right" href="/Login1">Login</a>

        </div>
      </div>
      <div className="contact-section container1" id="contact">
        <div className="short-contact1">
          <h2>Contact us</h2>
          <p className="w3-xlarge">We would like to hear from you!</p>
          <div className="w3-large w3-margin-top contact-info">
            <i className="fa fa-location-arrow"></i><span style={{ marginLeft: '10px' }}><a href="https://www.google.com/maps/place/London,+UK/@51.5287352,-0.3817852,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862" target="_blank">23th Street Maarif, Meknes, Morocco</a></span><br />
            <i className="fa fa-envelope-o"></i><span style={{ marginLeft: '10px' }}><a href="connect@factor.com">Talkease@gmail.com</a></span><br />
            <i className="fa fa-phone"></i><span style={{ marginLeft: '10px' }}><a href="+44 0197532486">+212 700354391</a></span><br />
          </div>
          <div className="w3-large w3-margin-top contact-info">
            <i className="fa fa-linkedin"></i><span style={{ marginLeft: '10px' }}><a href="#" target="_blank" style={{ textDecoration: 'none' }}>  LinkedIn</a></span><br />
            <i className="fa fa-facebook"></i><span style={{ marginLeft: '10px' }}><a href="#" target="_blank" style={{ textDecoration: 'none' }}>  Facebook</a></span><br />
            <i className="fa fa-twitter"></i><span style={{ marginLeft: '10px' }}><a href="#" target="_blank" style={{ textDecoration: 'none' }}>   Twitter</a></span><br />
          </div>
        </div>
      </div>
    
      <div className="footer-section w3-highway-blue w3-padding-large" id="footer">
        <center>© 2024 - Talkease</center>
      </div>
    </div>
    
    );
}

export default Index1