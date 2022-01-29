// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEb2Mr_ijPY6W15rPUVuQHCS8NrJ5QHfk",
  authDomain: "twitter-eea69.firebaseapp.com",
  projectId: "twitter-eea69",
  storageBucket: "twitter-eea69.appspot.com",
  messagingSenderId: "702657856893",
  appId: "1:702657856893:web:67281d702947bac9c87814",
  measurementId: "G-FTFCNENG2D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

