// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLkT1LU4VE-gZ_2pWRuRjeohy7EXyyjIo",
  authDomain: "netflixgpt-d785c.firebaseapp.com",
  projectId: "netflixgpt-d785c",
  storageBucket: "netflixgpt-d785c.appspot.com",
  messagingSenderId: "679345007957",
  appId: "1:679345007957:web:d2b7466a888eafa1f093dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
