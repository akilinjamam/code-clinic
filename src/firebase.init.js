// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibs2ma6NUjG8TtPZ6isPtBLn9D3-ie6Y",
  authDomain: "code-clinics-cf50a.firebaseapp.com",
  projectId: "code-clinics-cf50a",
  storageBucket: "code-clinics-cf50a.appspot.com",
  messagingSenderId: "83526996876",
  appId: "1:83526996876:web:e433aac706f9939a91fca9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
