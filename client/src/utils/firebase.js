// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "blogsite-862dd.firebaseapp.com",
  projectId: "blogsite-862dd",
  storageBucket: "blogsite-862dd.appspot.com",
  messagingSenderId: "787111880455",
  appId: "1:787111880455:web:f1e0b067076d7a2e4307a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
