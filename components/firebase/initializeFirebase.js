// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIorbFxjEoJYtCJTAk3pAaKuvquCz6ePE",
  authDomain: "attendance-sheet-d3b34.firebaseapp.com",
  databaseURL: "https://attendance-sheet-d3b34-default-rtdb.firebaseio.com",
  projectId: "attendance-sheet-d3b34",
  storageBucket: "attendance-sheet-d3b34.appspot.com",
  messagingSenderId: "835469214588",
  appId: "1:835469214588:web:6cd576a614c68c8d4f1af9",
  measurementId: "G-28TBLRBSRP"
};

// Initialize Firebase
export default function initializeFirebase(getDatabase = false){
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    console.log('firebase initialized');
    //console.log(firebase.apps);
    if(getDatabase){
      return firebase.firestore();
    }
}


