// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLuFKncQR3QMlxNVg2rpHyv_CP62CP5Zw",
  authDomain: "fir-bcg.firebaseapp.com",
  projectId: "fir-bcg",
  storageBucket: "fir-bcg.appspot.com",
  messagingSenderId: "189252740868",
  appId: "1:189252740868:web:c8e5b21e68dfcac2459251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;