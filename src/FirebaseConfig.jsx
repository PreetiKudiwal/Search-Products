// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBFlfxnw3VMyTYhrHumRW_TmiV5T8beRc",
  authDomain: "user-login-c10cd.firebaseapp.com",
  projectId: "user-login-c10cd",
  storageBucket: "user-login-c10cd.firebasestorage.app",
  messagingSenderId: "418510601830",
  appId: "1:418510601830:web:f18eb2834d8be008feb7a7",
  measurementId: "G-RLRYW47MTN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);