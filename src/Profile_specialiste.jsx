import React,{ useRef,useEffect } from "react"
import './Profilespecialiste.css'
import { Link } from 'react-router-dom'
import logo from './assets/logowspecialiste.png'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import darklight from './assets/darklight.png'
import logout from './assets/logout.png'
import person from './assets/profileim.png'
import password from './assets/passwordicon.png'
import stylo from './assets/stylo.png'
import { useState } from "react"
import drawChart from './Chartprofile'
import axios from 'axios'; 
function Profile_specialiste(){
    const [showModal, setShowModal] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        email: "",
        phone: ""
    });
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
    
  
    const handleModalToggle = () => {
      setShowModal(!showModal);
    };
  
    const handleOldPasswordChange = (e) => {
      setOldPassword(e.target.value);
    };
  
    const handleNewPasswordChange = (e) => {
      setNewPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
        e.preventDefault();
    
        if (newPassword !== confirmPassword) {
            alert("Les nouveaux mots de passe ne correspondent pas.");
            return;
        }
    
        const requestData = {
            specialisteId: localStorage.getItem('specialisteId'), // Récupérer l'ID du spécialiste depuis le stockage local
            oldPassword,
            newPassword,
            confirmPassword,
        };
    
        fetch('http://localhost:3002/update-password1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du mot de passe.');
            }
            return response.json();
        })
        .then(data => {
            alert("Mot de passe modifié avec succès.");
            setShowModal(false);
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur lors de la modification du mot de passe.");
        });
    };
    
    
    
    useEffect(() => {
        const specialisteId = localStorage.getItem('specialisteId'); // Récupérer l'identifiant du spécialiste connecté depuis le stockage local
    
        if (specialisteId) {
            const specialisteDataString = localStorage.getItem('specialisteData');
            if (specialisteDataString) {
                const specialisteData = JSON.parse(specialisteDataString);
                if (specialisteData && specialisteData.nom) {
                    setUser({
                        nom: specialisteData.nom,
                        prenom: specialisteData.prenom,
                        email: specialisteData.email,
                        phone: specialisteData.phone
                    });
                } else {
                    console.error("Les données du spécialiste ne sont pas valides.");
                }
            } else {
                console.error("Les données du spécialiste ne sont pas disponibles dans le stockage local.");
            }
        } else {
            console.error("L'identifiant du spécialiste n'est pas disponible dans le stockage local.");
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const specialisteId = localStorage.getItem('specialisteId'); // Récupérer l'ID du spécialiste connecté
            const userData = {
                specialisteId: specialisteId,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                phone: user.phone
            };
            await axios.post("http://localhost:3002/update-profile1", userData);
            alert("Profil mis à jour avec succès !");
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil:", error);
            alert("Erreur lors de la mise à jour du profil.");
        }
    };
    useEffect(() => {
        drawChart();
    }, []);
    const [dynamicNumber, setDynamicNumber] = useState(0); 
    const [counting, setCounting] = useState(true); 
    useEffect(() => {
        if (counting) {
            const interval = setInterval(() => {
                setDynamicNumber(prevNumber => (prevNumber + 1) % 6); // Pour garder le nombre dans la plage de 0 à 5
            }, 200); // Changer l'intervalle à 500ms pour aller plus vite

            return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
        }
    }, [counting]);
    useEffect(() => {
        // Arrêter le comptage lorsque le nombre atteint 5
        if (dynamicNumber === 5) {
            setCounting(false);
        }
    }, [dynamicNumber]);
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    localStorage.setItem('userEmail', user.email);  
    return(
        <div className="parentpp">
        <div className="div1pp">
            <div className="imagelogo1pp">
             <img src={logo} alt="" /> 
            </div> 
            <Link to='/Home_specialiste'>
                <button className="button1pp">
                    HOME
                    <div className="imagelogo2pp">
                        <img src={overview} alt="" />
                    </div>
                </button>
                </Link>
            <Link to='/'>
            <Link to='/Todo'>
            <button className="button2hp"> 
            TODO
            <div className="imagelogo2hp">
                    <img src={practice} alt="" />
                </div>
            </button>
            </Link>
            </Link>
            <Link to='/Profile_specialiste'>
            <button className="button3pp">
                PROFILE
                <div className="imagelogo2pp">
                    <img src={iconpro3} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/'>
            <Link to ='/Enregpat'>
            <button className="button4pp">
                ENREG-PAT
                <div className="imagelogo2pp">
                    <img src={settings} alt="" />
                </div>
                </button>
            </Link>
            </Link>
            <button onClick={toggleDark} className="button5pp">
                DARK/LIGHT
                <div className="imagelogo2pp">
                    <img src={darklight} alt="" />
                </div>
                </button>
                
            <Link to='/Index1'>
            <button className="button6pp" > 
            LOGOUT
            <div className="imagelogo3pp">
                    <img src={logout} alt="" />
                </div>
            </button>
            </Link>
        </div>
        <div className="div2pp">
        <div class="four">
  <h1><em>Specialiste Espace</em></h1>
</div>
<div className="profileperson" >
                    <img
                        src={person}
                        alt="Profil"
                        style={{ borderRadius: "50%" }}
                    />
                    <div className="styloniw">
                        <img src={stylo} alt="" />
                    </div>
                </div>
            <input type="file"  style={{ display: 'none' }} />
            <div className="name">{user.prenom} {user.nom}</div>
        </div>
        <div className="div3p">
        <form action="/Profile">
      <label className="pname">Prénom</label>
      <input type="text" id="fname" name="prenom" value={user.prenom}  placeholder="Votre Prénom" onChange={handleProfileChange}   /><br/><br/>
      <div className="styloniw1">  <img src={stylo} alt="" /> </div>
      <label className="nname">Nom</label>
      <input type="text" id="lname1" name="nom" value={user.nom}   placeholder="Votre Nom" onChange={handleProfileChange}  /><br/><br/>
      <div className="styloniw2">  <img src={stylo} alt="" /> </div>
      <label className="ename">Email</label>
      <input type="text" id="lname2" name="email" value={user.email} placeholder="Votre Email@outlook.com" onChange={handleProfileChange}   /><br/><br/>
      <div className="styloniw3">  <img src={stylo} alt="" /> </div>
      <label className="tname">Téléphone</label>
      <input type="text" id="lname3" name="phone" value={user.phone}  placeholder="Votre Téléphone" onChange={handleProfileChange}   /><br/><br/>
      <div className="styloniw4">  <img src={stylo} alt="" /> </div>
      <input type="submit" onClick={handleSubmit}  value="Modifier" />
    </form>
        </div>
        <div className="textex">Détails personnels:</div>
        <div className="div4p">
            <div className="textpxd">Modifier le Mot de passe</div>
            <div className="textpxd1">Pour changer votre mot de passe actuel</div>
        <div className="profilepassword1"> <img src={password} alt=""/></div> 
        
        </div>
        <div className="div5pp">
    <button className="btnmodiferpwdp" onClick={handleModalToggle} >Modifier Password</button>
    {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalToggle}>&times;</span>
            <h2 className="modifiertitle">Modifier le mot de passe</h2>
            <form onSubmit={handlePasswordChange}>
              <label className="oldPassword">Ancien Password:</label>
              <input type="password" id="oldPassword" value={oldPassword} onChange={handleOldPasswordChange} />
              <label className="newPassword">Nouveau Password:</label>
              <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
              <label className="confirmPassword">Confirmer Password:</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              <button type="submit" className="btnmodiferpwd1">Modifier</button>
            </form>
          </div>
        </div>)}
    <button className="btnmodiferpwdpx"  >Pause</button>
    <button className="btnmodiferpwdpex2"  >Parole Lente</button>
    <button className="btnmodiferpwdpex3"  >Respiration</button>
    <button className="btnmodiferpwdpex4"  >Début en Douceur </button>
    <button className="btnmodiferpwdpex5"  >Discours Mélodieux</button>  
                    <div className="countex">
                   + {dynamicNumber} types d'exercices   
                    </div>         
        </div>
       
</div>
    );
}

export default Profile_specialiste