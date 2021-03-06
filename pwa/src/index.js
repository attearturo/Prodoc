import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// Inicializar Firebase
var config = {
    apiKey: "AIzaSyDwh9MNRuKHh1r5peqPN9U-L5jVKPUxFBw",
    authDomain: "notes-267ba.firebaseapp.com",
    databaseURL: "https://notes-267ba.firebaseio.com",
    projectId: "notes-267ba",
    storageBucket: "notes-267ba.appspot.com",
    messagingSenderId: "729614414787"
};
firebase.initializeApp(config);


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

registerServiceWorker();
