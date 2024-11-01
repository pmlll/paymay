// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCEtUJz1fRVKhqJENJcncPsK1qV7BMk-Tw",
    authDomain: "paymay-fe82d.firebaseapp.com",
    projectId: "paymay-fe82d",
    storageBucket: "paymay-fe82d.firebasestorage.app",
    messagingSenderId: "626708407002",
    appId: "1:626708407002:web:a9bb33d49cabbff3bafbe3"
};



const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
export default app;
export { auth };