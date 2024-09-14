// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD0IjUzCZ8bVMkyhB55ucvrSrSvlKUtx7k",
    authDomain: "e-comers-8c375.firebaseapp.com",
    databaseURL: "https://e-comers-8c375-default-rtdb.firebaseio.com",
    projectId: "e-comers-8c375",
    storageBucket: "e-comers-8c375.appspot.com",
    messagingSenderId: "738511771652",
    appId: "1:738511771652:web:135385165620ea8cc03d51",
    measurementId: "G-BEZXMECM5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);