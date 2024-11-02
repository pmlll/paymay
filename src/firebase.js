import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCEtUJz1fRVKhqJENJcncPsK1qV7BMk-Tw",
    authDomain: "paymay-fe82d.firebaseapp.com",
    projectId: "paymay-fe82d",
    storageBucket: "paymay-fe82d.firebasestorage.app",
    messagingSenderId: "626708407002",
    appId: "1:626708407002:web:a9bb33d49cabbff3bafbe3"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
export default app;
export { auth, db };