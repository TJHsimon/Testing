// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcg1vo6HViIiTvs9m91rOh2rvQznO3fY",
  authDomain: "fyp-burn.firebaseapp.com",
  projectId: "fyp-burn",
  storageBucket: "fyp-burn.appspot.com",
  messagingSenderId: "76307254915",
  appId: "1:76307254915:web:a0eaaa99852287c22315b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//function 
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};