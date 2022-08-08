// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvANmVbwWoJU19gqctey6ZIue2svznlyk",
  authDomain: "coders-clinic.firebaseapp.com",
  projectId: "coders-clinic",
  storageBucket: "coders-clinic.appspot.com",
  messagingSenderId: "932158863205",
  appId: "1:932158863205:web:d3f080d63db2025e43d38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
