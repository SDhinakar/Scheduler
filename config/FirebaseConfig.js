

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "s6project-87729.firebaseapp.com",

  databaseURL: "https://s6project-87729-default-rtdb.firebaseio.com",

  projectId: "s6project-87729",

  storageBucket: "s6project-87729.firebasestorage.app",

  messagingSenderId: "1029818350674",

  appId: "1:1029818350674:web:2a25220c4e0854140b738b",

  measurementId: "G-1HP6EJGXJN"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);