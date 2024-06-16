// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_m18xEtnJh6zcyH4UivOINVeYu7hy6LA",
  authDomain: "viteapp-78fa9.firebaseapp.com",
  databaseURL: "https://viteapp-78fa9-default-rtdb.firebaseio.com",
  projectId: "viteapp-78fa9",
  storageBucket: "viteapp-78fa9.appspot.com",
  messagingSenderId: "629753910267",
  appId: "1:629753910267:web:e6a1d07cb626f204d8315e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}