import React,{ useRef,useEffect } from "react"
import './Profile.css'
import { Link } from 'react-router-dom'
import logo from './assets/logow.jpg'
import iconpro3 from './assets/personiconx.png'
import practice from './assets/practice.png'
import overview from './assets/overview.png'
import settings from './assets/collab.png'
import darklight from './assets/darklight.png'
import save from './assets/save.jpg'
import logout from './assets/logout.png'
import person from './assets/profileim.png'
import password from './assets/passwordicon.png'
import stylo from './assets/stylo.png'
import { useState } from "react"
import drawChart from './Chartprofile'
import axios from 'axios';

function Profile(){
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
            userId:localStorage.getItem('userId'), // Assurez-vous d'avoir l'ID de l'utilisateur ici
            oldPassword,
            newPassword,
            confirmPassword
        };
    
        fetch('http://localhost:3002/update-password', {
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
        const userId = localStorage.getItem('userId');
        if (userId) {
            const userDataString = localStorage.getItem('userData');
            if (userDataString) {
                try {
                    const userData = JSON.parse(userDataString);
                    if (userData && userData.nom) {
                        setUser({
                            nom: userData.nom,
                            prenom: userData.prenom,
                            email: userData.email,
                            phone: userData.phone
                        });
                    } else {
                        console.error("Les données de l'utilisateur ne sont pas valides.");
                    }
                } catch (error) {
                    console.error("Erreur lors du parsing des données de l'utilisateur:", error);
                }
            } else {
                console.error("Les données de l'utilisateur ne sont pas disponibles dans le stockage local.");
            }
        } else {
            console.error("L'identifiant de l'utilisateur n'est pas disponible dans le stockage local.");
        }
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur connecté
            const userData = {
                userId: userId,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                phone: user.phone
            };
            await axios.post("http://localhost:3002/update-profile", userData);
            alert("Profil mis à jour avec succès !");
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil:", error);
            alert("Erreur lors de la mise à jour du profil.");
        }
    };
    useEffect(() => {
        drawChart();
    }, []);
    function toggleDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    const inputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(() => {
        const storedImage = localStorage.getItem('profileImage');
        return storedImage || person; 
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setProfileImage(imageURL);
            localStorage.setItem('profileImage', imageURL);
        } else {
            setProfileImage(person);
            localStorage.setItem('profileImage', person);
        }
    };    

    const handleClick = () => {
        inputRef.current.click();
    };
    localStorage.setItem('userEmail', user.email);  

  return(
        <div className="parentp">
        <div className="div1p">
            <div className="imagelogo1p">
             <img src={logo} alt="" /> 
            </div> 
            <Link to='/Home'>
                <button className="button1">
                    HOME
                    <div className="imagelogo2">
                        <img src={overview} alt="" />
                    </div>
                </button>
                </Link>
            <Link to='/Practice'>
            <button className="button2p"> 
            PRACTICE
            <div className="imagelogo2p">
                    <img src={practice} alt="" />
                </div>
            </button>
            </Link>
            <Link to='/Profile'>
            <button className="button3p">
                PROFILE
                <div className="imagelogo2p">
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
            <button onClick={toggleDark} className="button5p">
                DARK/LIGHT
                <div className="imagelogo2p">
                    <img src={darklight} alt="" />
                </div>
                </button>
                
            <Link to='/Index1'>
            <button className="button6p" > 
            LOGOUT
            <div className="imagelogo3p">
                    <img src={logout} alt="" />
                </div>
            </button>
            </Link>
        </div>
        <div className="div2p">
        <div class="four">
  <h1><em>Personnalisez votre profile</em></h1>
</div>
<div className="profileperson" onClick={handleClick}>
                    <img
                        src={profileImage ? profileImage : person}
                        alt="photo de profile"
                        style={{ borderRadius: "50%" }}
                    />
                    
                    <div className="styloniw">
                        <img src={stylo} alt="" />
                    </div>
                </div>
            <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange} />
            <div className="name">{user.nom} {user.prenom}</div>
        </div>
        <div className="div3p">
        <form action="/Profile">
      <label className="pname">Prénom:</label>
      <input type="text" id="fname" name="prenom" value={user.prenom} placeholder="Votre Prénom"  onChange={handleProfileChange} /><br/><br/>
      <div className="styloniw1">  <img src={stylo} alt="" /> </div>
      <label className="nname">Nom</label>
      <input type="text" id="lname1" name="nom" value={user.nom}  placeholder="Votre Nom"  onChange={handleProfileChange} /><br/><br/>
      <div className="styloniw2">  <img src={stylo} alt="" /> </div>
      <label className="ename">Email</label>
      <input type="text" id="lname2" name="email" value={user.email}  placeholder="Votre Email@outlook.com"  onChange={handleProfileChange} /><br/><br/>
      <div className="styloniw3">  <img src={stylo} alt="" /> </div>
      <label className="tname">Téléphone</label>
      <input type="text" id="lname3" name="phone" value={user.phone} placeholder="Votre Téléphone"   onChange={handleProfileChange}/><br/><br/>
      <div className="styloniw4">  <img src={stylo} alt="" /> </div>
      <input type="submit"  onClick={handleSubmit} value="Modifier" />
    </form>
        </div>
        <div className="textex">Détails personnels:</div>
        <div className="div4p">
            <div className="textpxd">Modifier le Mot de passe</div>
            <div className="textpxd1">Pour changer votre mot de passe actuel</div>
        <div className="profilepassword1"> <img src={password} alt=""/></div> 
        
        </div>
        <div className="div5p">
        <canvas id="myChart" style={{ width: '10%', maxWidth: '428px' }}></canvas>
    <button className="btnmodiferpwd" onClick={handleModalToggle} >Modifier Password</button>
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
</div>
       
</div>
    )
}

export default Profile