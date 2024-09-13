// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxbfSbWRO32inUJAnu5KMwO5cFb3BTHg0",
  authDomain: "newsletter-3151d.firebaseapp.com",
  projectId: "newsletter-3151d",
  storageBucket: "newsletter-3151d.appspot.com",
  messagingSenderId: "158539622175",
  appId: "1:158539622175:web:c072362886dffe3124322a",
  measurementId: "G-F39K1S7NB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app); // Only initialize analytics on the client side
}

const db = getFirestore(app);

export { db, collection, addDoc };