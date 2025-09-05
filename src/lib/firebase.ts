import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  "projectId": "simpleauth-b0nan",
  "appId": "1:413810157264:web:e80b6a31ef17d2742860d5",
  "storageBucket": "simpleauth-b0nan.firebasestorage.app",
  "apiKey": "AIzaSyA3baXl817mVfYJV7d5GOLuL9YSe3wSF3s",
  "authDomain": "simpleauth-b0nan.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "413810157264"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
