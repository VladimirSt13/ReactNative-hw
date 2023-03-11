// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

export const storage = getStorage(firebase);

export const db = getFirestore(firebase);

export const auth = getAuth(firebase);
