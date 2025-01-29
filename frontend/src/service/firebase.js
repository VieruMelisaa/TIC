import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithEmailAndPassword as firebaseSignIn,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  signOut as firebaseSignOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXc-q09RpN9OJ8F5B1iRaIXJJhPxCjIVs",
    authDomain: "proiectmelisa.firebaseapp.com",
    projectId: "proiectmelisa",
    storageBucket: "proiectmelisa.firebasestorage.app",
    messagingSenderId: "331902269268",
    appId: "1:331902269268:web:5e6b53e8640c30ffac7ac1"
};

let firebaseApp;
let auth;

const initializeFirebaseApp = () => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig); 
        console.log("Firebase Initialized");
    auth = getAuth(firebaseApp); 
  }
};

const getFirebaseAuth = () => {
  if (!auth) {
    throw new Error("Firebase Auth has not been initialized.");
  }
  return auth;
}; 

const signInWithEmailAndPassword = async (email, password) => {
  const authInstance = getFirebaseAuth();
  return firebaseSignIn(authInstance, email, password);
};

const onAuthStateChanged = (callback) => {
  const authInstance = getFirebaseAuth();
  return firebaseOnAuthStateChanged(authInstance, callback);
};

const signOut = () => {
  return firebaseSignOut(getFirebaseAuth());
};

export { initializeFirebaseApp, getFirebaseAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut };