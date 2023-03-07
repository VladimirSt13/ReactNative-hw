import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJNpHcTkC__k5NjcbqleO3qCrHRTULHkk",
  authDomain: "ract-native-social.firebaseapp.com",
  projectId: "ract-native-social",
  storageBucket: "ract-native-social.appspot.com",
  messagingSenderId: "840133109582",
  appId: "1:840133109582:web:f2ae2c0a552b9c9c9ea01f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
