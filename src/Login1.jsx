import React from 'react'
import './Signuplogin.css'
import './css/animate.min.css'
import './css/bootstrap.min.css'
import './css/datepicker.css'
import './css/font-awesome.min.css'
import './css/icofont.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/normalize.css'
import './css/owl-carousel.css'
import './css/responsive.css'
import './css/slicknav.min.css'
import emailicon from './assets/emailicon.png'
import passwordicon from './assets/passwordicon.png'
import A1 from './assets/A1.jpg'
import A2 from './assets/A2.jpg'
import A3 from './assets/A3.jpg'
import A4 from './assets/A4.jpg'
import A5 from './assets/A5.jpg'
import A6 from './assets/A6.jpg'
import Aut1 from './assets/Aut1.jpg'
import Aut3 from './assets/Aut3.jpg'
import Aut4 from './assets/Aut4.jpg'
import Aut5 from './assets/Aut5.jpg'
import blockqoute from './assets/blockqoute-bg.jpg'
import blog3 from './assets/blog3.jpg'
import bread from './assets/bread-bg.jpg'
import call from './assets/call-bg.jpg'
import client from './assets/client-bg.jpg'
import driss1 from './assets/driss1.jpg'
import fun from './assets/fun-bg.jpg'
import section from './assets/section-img.png'
import signup from './assets/signup-bg.jpg'
import slider2 from './assets/slider2.jpg'
import Talkease from './assets/TT.jpg'
import video from './assets/video-bg.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Login1(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/Login1', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.success)  {
                    localStorage.setItem('userId', result.data.userId);
                    localStorage.setItem('userData', JSON.stringify(result.data.userData));
                    navigate('/Home');
                } else {
                    console.error("Invalid response data:", result.data);
                }
            })
            .catch(err => console.log(err));
    };
    
    return(
        <section className="signup section">
        <div className="container1">
            <div className="row">
                <div className="col-lg-12">
                    <div className="imagex">
                        <img src={Talkease} alt=""/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="custom-title-container">
                            <div className="section-title">
                                <h2 className="custom-title6">Login Now</h2>
                                <p className="custom-title7"><g>Hey, Enter your email and password to login</g></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12 col-12">
                    <form onSubmit={handleSubmit} className="form" action="Dashbord.jsx">
                        <div className="rounded-box">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" className="email1" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Password" className="pwd1" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-4 col-12">
                                    <div className="form-group">
                                        <div className="button">
                                            <div className="row justify-content-center">
                                                <div className="custom-btn-container">
                                                    <button type="submit" className="btn custom-btn">Login</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="login-button">
                                            <Link to="/signup" type="button" className="btn">Sign Up</Link>
                                        </div>
                                        <div className="section-title">
                                             
                                         <p className="custom-title2"><g>Or Sign Up with Email</g></p> 
                                         <a href="https://www.gmail.com">
                                             <div className="image1">
                                                <img src={emailicon} alt="" /> 
                                             </div>
                                        </a>
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Login1;