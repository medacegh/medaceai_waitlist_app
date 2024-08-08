// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Corrected import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQTqCLxHjYUn9xvKoM4NdXfL7USxq5iCY",
  authDomain: "medace-waitlist-app.firebaseapp.com",
  projectId: "medace-waitlist-app",
  storageBucket: "medace-waitlist-app.appspot.com",
  messagingSenderId: "3364240751",
  appId: "1:3364240751:web:c52e7c469f154841433c9a",
  measurementId: "G-HK453B5FVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}