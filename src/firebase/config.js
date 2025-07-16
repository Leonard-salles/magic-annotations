// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVaQOz2jOPxNlmmZMlwxcNDBsMYHMSEFc",
  authDomain: "magic-annotation.firebaseapp.com",
  projectId: "magic-annotation",
  storageBucket: "magic-annotation.firebasestorage.app",
  messagingSenderId: "19301448797",
  appId: "1:19301448797:web:e0c57c003e87a90e3fe1b4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }