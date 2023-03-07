// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJNpHcTkC__k5NjcbqleO3qCrHRTULHkk",
  authDomain: "ract-native-social.firebaseapp.com",
  projectId: "ract-native-social",
  storageBucket: "ract-native-social.appspot.com",
  messagingSenderId: "840133109582",
  appId: "1:840133109582:web:f2ae2c0a552b9c9c9ea01f",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
