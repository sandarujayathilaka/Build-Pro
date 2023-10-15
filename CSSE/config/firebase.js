// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQS6VpWUmjHhJq_VHP2rSW1Clm_8WoF90",
  authDomain: "csse-f3393.firebaseapp.com",
  projectId: "csse-f3393",
  storageBucket: "csse-f3393.appspot.com",
  messagingSenderId: "667688031134",
  appId: "1:667688031134:web:d5864b0412e26265c7bc8f",
  measurementId: "G-VKPWG1JN40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
