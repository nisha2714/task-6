import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0AynpE9eKAfBNGAhEbbSbUuz2_t6Nt-s",
  authDomain: "react-task-6.firebaseapp.com",
  projectId: "react-task-6",
  storageBucket: "react-task-6.appspot.com",
  messagingSenderId: "1049453818644",
  appId: "1:1049453818644:web:468fb2acd2b24e50978801",
  measurementId: "G-6XBXZZX5H0",
  databaseURL: "https://react-task-6-default-rtdb.firebaseio.com",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
