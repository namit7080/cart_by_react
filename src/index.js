import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as firebase from 'firebase'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyARM7LvG7Yg5i3xGqoj6gzu7Pfnl3EGTV8",
    authDomain: "cart-51428.firebaseapp.com",
    projectId: "cart-51428",
    storageBucket: "cart-51428.appspot.com",
    messagingSenderId: "75784844244",
    appId: "1:75784844244:web:a1ed418a7afecbb25c5c41"
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
