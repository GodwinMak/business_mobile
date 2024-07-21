// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv3N3BSS9xiTPWQ16pMLFg7Q2gGaULrxU",
  authDomain: "mobile-app-1baf1.firebaseapp.com",
  projectId: "mobile-app-1baf1",
  storageBucket: "mobile-app-1baf1.appspot.com",
  messagingSenderId: "509358847525",
  appId: "1:509358847525:web:3afe24d749ca3eb16431cc",
  measurementId: "G-BGDWZ75KF9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
