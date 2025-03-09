import React, { useRef, useEffect, useState } from "react";
import './Practice.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logow.jpg';
import iconpro3 from './assets/personiconx.png';
import practice from './assets/practice.png';
import overview from './assets/overview.png';
import settings from './assets/collab.png';
import save from './assets/save.jpg';
import darklight from './assets/darklight.png';
import logout from './assets/logout.png';
import pause from './assets/pause.png';
import next from './assets/nextsf.png';
import retry from './assets/retrysf.png';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import vocale from './assets/vocale.png';
import video from './assets/video.png';
import pauseex from './assets/pauseex.png';
import slowspeech from './assets/slow_speech.png';
import smouth from './assets/smooth.png';
import breathing from './assets/breathing.png';
import easy from './assets/easy.png';
import check from './assets/check.png';
import videoD from './assets/Pausing exercice.mp4';
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function Practice() {
    const [mediaType, setMediaType] = useState('audio');
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true, audio: true });
    const [record, setRecord] = useState('');
    const [videoWidth, setVideoWidth] = useState('315px'); // Largeur initiale de la vidéorecord
    const [videoHeight, setVideoHeight] = useState('155px'); // Hauteur initiale de la vidéorecord
    const [videoWidth1, setVideoWidth1] = useState('610px'); // Largeur initiale de la vidéoexercice
    const [videoHeight1, setVideoHeight1] = useState('264px'); // Hauteur initiale de la vidéoexercice
    const navigate = useNavigate();
    const [exerciseNumber, setExerciseNumber] = useState(1);
    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        console.log('userEmail:', userEmail);
        const uniqueKey = `mediaBlobUrl_${new Date().getTime()}`;

        const convertBlobToDataURL = (blob) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        };

        const storeRecording = async () => {
            if (mediaBlobUrl && userEmail) {
                const dataURL = await convertBlobToDataURL(await fetch(mediaBlobUrl).then(r => r.blob()));
                const dbName = 'EnregistrementsDB';
                const request = window.indexedDB.open(dbName, 1);

                request.onerror = (event) => {
                    console.error('Erreur lors de l\'ouverture de la base de données.', event);
                };

                request.onsuccess = (event) => {
                    console.log('Base de données ouverte avec succès.');
                    const db = event.target.result;
                    const transaction = db.transaction(['recordings'], 'readwrite');
                    const store = transaction.objectStore('recordings');

                    const userRecord = {
                        url: dataURL,
                        type: mediaType,
                        key: uniqueKey,
                        userEmail: userEmail
                    };

                    const addRequest = store.add(userRecord);
                    addRequest.onsuccess = (event) => {
                        console.log('Enregistrement ajouté avec succès.', event.target.result);
                    };

                    addRequest.onerror = (event) => {
                        console.error('Erreur lors de l\'ajout de l\'enregistrement.', event.target.error);
                    };
                };

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    const store = db.createObjectStore('recordings', { keyPath: 'key' });
                    store.createIndex('userEmail', 'userEmail', { unique: false });
                };
            }
        };

        storeRecording();
    }, [mediaBlobUrl, mediaType, userEmail]);
    
    const handleDeleteRecording = (key) => {
        const dbName = 'EnregistrementsDB';
        const request = window.indexedDB.open(dbName, 1);

        request.onerror = (event) => {
            console.error('Erreur lors de l\'ouverture de la base de données.', event);
        };

        request.onsuccess = (event) => {
            console.log('Base de données ouverte avec succès pour la suppression.');
            const db = event.target.result;
            const transaction = db.transaction(['recordings'], 'readwrite');
            const store = transaction.objectStore('recordings');
            const deleteRequest = store.delete(key);

            deleteRequest.onsuccess = (event) => {
                console.log('Enregistrement supprimé avec succès:', key);
            };

            deleteRequest.onerror = (event) => {
                console.error('Erreur lors de la suppression de l\'enregistrement:', event.target.error);
            };
        };
    };
    
    const handleMediaTypeChange = (type) => {
        setMediaType(type);
        setRecord(type);
        
    };
    const handleStopRecording = () => {
        stopRecording();
        setVideoWidth('315px');
        setVideoHeight('155px');
        navigate('/Enreg');
    };
     const adjustVideoSize = () => {
            setVideoWidth('315px'); // Nouvelle largeur de la vidéo
            setVideoHeight('155px'); // Nouvelle hauteur de la vidéo
        };
        const videoRef = useRef(null);
        const handleStopClick = () => {
            if (videoRef.current) {
                if (videoRef.current.paused) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            }}
        const videoRefretry = useRef(null);
            function retryVideo() {
                if (videoRefretry.current) {
                    videoRefretry.current.currentTime = 0;
                }
            }
            useEffect(() => {
                const exerciseNumber = 1; // Numéro de l'exercice pour cette page
                const savedExercisesCompleted = parseInt(localStorage.getItem('exercisesCompleted'), 10) || 0;
        
                if (exerciseNumber > savedExercisesCompleted) {
                    localStorage.setItem('exercisesCompleted', exerciseNumber.toString());
                }
            }, []); // Se déclenche uniquement au chargement initial
    return(
        
        <div class="parent">
            <div className="div1">
                <div className="imagelogo1">
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
                <button className="button2"> 
                PRACTICE
                <div className="imagelogo2">
                        <img src={practice} alt="" />
                    </div>
                </button>
                </Link>
                <Link to='/Profile'>
                <button className="button3">
                    PROFILE
                    <div className="imagelogo2">
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
            <Link to={{ pathname: '/Enreg', search: `?exerciseNumber=${exerciseNumber}` ,state: { userEmail: userEmail }}}>
            <button className="enregistrement">
                ENREG
                <div className='imagelogo2p'>
                    <img src={save} alt="" />
                </div>
            </button>
            </Link>
                <button onClick={toggleDark} className="button5">
                    DARK/LIGHT
                    <div className="imagelogo2">
                        <img src={darklight} alt="" />
                    </div>
                    </button>
                    
                <Link to='/Index1'>
                <button className="button6" > 
                LOGOUT
                <div className="imagelogo3">
                        <img src={logout} alt="" />
                    </div>
                </button>
                </Link>
            </div>
<div className="div2"> 

                    <div className="videoexercice">
                        <video ref={(element) => { videoRef.current = element; videoRefretry.current = element}} src={videoD} controls style={{ position: 'relative' ,width: videoWidth1, height: videoHeight1}}/>
                    </div>
                    <div className="checkicon"> <img src={check} alt=""/></div>
                    <div className="obsvd">Notez Bien:</div>
                    <div className="obsvd1">Concentrez-vous pleinement sur la vidéo avant de commencer l'exercice.</div>
                    <div className="obsvd2">Arrêtez-vous à la fin de la vidéo pour évaluer votre performance.</div>
                    <div className="obsvd3">Pratiquez ensuite l'exercice et enregistrez vos résultats pour qu'ils soient analysés par </div>
                    <div className="obsvd4">les spécialistes.</div>
                    <div className="obsvd5">Vous pouvez télécharger votre fichier pour obtenir des conseils personnalisés. </div>
                    <div className="obsvd6">Reprenez l'exercice suivant une fois prêt, ou refaites-le autant de fois que nécessaire</div>
                    <div className="obsvd7">pour progresser.</div>
</div>       
<div className="div3">
    <div className="textex">
        Exercices List
    </div>
    <div className="exercices">
        <img src={one} alt="" style={{ backgroundColor: 'white' , borderRadius: '50%'}} />
        <div className="textexercice"> Pausing_Exercice </div>
        <progress id="file" value="39" max="100"> 50% </progress>
        <div className="exercicelogo">
        <img src={pauseex} alt="" />
        </div>
    </div>
    <div className="exercices2">
        <img src={two} alt="" />
        <div className="textexercice"> Slow_Speech_Exercice </div>
        <progress id="file" value="0" max="100"> 50% </progress>
        <div className="exercicelogo">
        <img src={slowspeech} alt="" />
        </div>
    </div>
    <div className="exercices3">
        <img src={three} alt="" />
        <div className="textexercice"> Smooth_Speech_Exercice </div>
        <progress id="file" value="0" max="100"> 50% </progress>
        <div className="exercicelogo">
        <img src={smouth} alt="" />
        </div>
    </div>
    <div className="exercices4">
        <img src={four} alt="" />
        <div className="textexercice"> Breathing_Exercice </div>
        <progress id="file" value="0" max="100"> 50% </progress>
        <div className="exercicelogo">
        <img src={breathing} alt="" />
        </div>
    </div>
    <div className="exercices5">
        <img src={five} alt="" />
        <div className="textexercice"> Easy_Onset_Exercice </div>
        <progress id="file" value="0" max="100"> 50% </progress>
        <div className="exercicelogo">
        <img src={easy} alt="" />
        </div>
    </div>
 </div>
<div className="div4">
    <div className="text3" onClick={retryVideo}>
       Retry
       <div className="imagelogo6">
                        <img src={retry} alt="" />
       </div>
    </div>
</div>
<div className="div5">
<div className="text2" onClick={handleStopClick}>
       Stop
       <div className="imagelogo4">
                        <img src={pause} alt="" />
                    </div>
    </div>
</div>
<Link to="/Practice2" style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="div6">
        <div className="text1">
            Next
            <div className="imagelogo5">
                <img src={next} alt="" />
            </div>
        </div>
    </div>
</Link>
<div className="div7">
        <div className="textrec1">Record audio/video</div>
        <div className="textrec">
                <div className="exercicelogorec">
                <img src={mediaType === 'audio' ? vocale : video} alt="" onClick={() => handleMediaTypeChange(mediaType === 'audio' ? 'video' : 'audio')} />
                </div>  
                <div>
                    {mediaType === 'audio' && <audio src={mediaBlobUrl} controls autoPlay loop />}
                    {mediaType === 'video' && <video src={mediaBlobUrl} controls autoPlay loop style={{ width: videoWidth, height: videoHeight }} />}
                </div> 
         </div>
         <div>
                    <p className="statutxt">{status}</p>
                    <button className='buttrec1' onClick={startRecording}>Start Recording</button>
                    <button className='buttrec' onClick={() => { stopRecording(); adjustVideoSize(); }}>Stop Recording</button>            
         </div>
</div>
</div>

    );
}

export default Practice