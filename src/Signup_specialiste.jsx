import {useState} from 'react';
import './Signuplogin.css'
import emailicon from './assets/emailicon.png'
import Talkease from './assets/TT.jpg'
import video from './assets/video-bg.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup_specialiste(){
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [sexe, setSexe] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/Signup_specialiste', {nom, prenom, email, password, phone, sexe, date})
        .then(result => console.log(result))
        navigate('/Login1_specialiste')
        .catch(err => console.log(err))
    }
    return(
        <section className="signup section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="image">
                    <img src={Talkease} alt=""/>
                </div>
                <div className="row justify-content-center">
                     <div className="custom-title-container"> {/* Ajoutez une classe personnalisée */}
                     <div className="section-title">
                          <h2 className="custom-title">Sign Up Now</h2> {/* Ajoutez une classe custom-title */}
                          <p className="custom-title1"><g>Hey Specialiste, Enter your details to create your account</g></p>
                     </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="row justify-content-center"> {/* Ajout de la classe justify-content-center pour centrer les éléments */}
            <div className="col-lg-6 col-md-12 col-12">
                <form onSubmit={handleSubmit} className="form" action="Login1.jsx">
                    <div className="rounded-box"> {/* Ajout de la classe rounded-box pour la boîte décorée */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="nom" type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="prenom" type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="phone" type="text" placeholder="Téléphone" onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="password" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="password1" type="password" placeholder="Confirmer le mot de passe"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input name="Sexe" type="text" placeholder="Sexe" onChange={(e) => setSexe(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <input type="Date" placeholder="Date" name="Date" id="datepicker" className="long-input" onChange={(e) => setDate(e.target.value)} />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-12">
                                <div className="form-group">
                                    <div className="button">
                                    <div className="row justify-content-center">
                                        <div className="custom-btn-container"> {/* Ajoutez une classe personnalisée */}
                                         <button type="submit" className="btn custom-btn">Sign Up</button> {/* Ajoutez une classe custom-btn */}
                                    </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="custom-title-container"> {/* Ajoutez une classe personnalisée */}
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
                                    <div class="login-button">
                                        <Link to="/login1_specialiste" type="button" className="btn">Login</Link>
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

export default Signup_specialiste