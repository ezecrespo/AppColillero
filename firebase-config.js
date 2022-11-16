// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZU8MBRz-k6ZYIGJm4CzzkzXCEF2XXN_s",
  authDomain: "react-fb-auth-1b0f5.firebaseapp.com",
  projectId: "react-fb-auth-1b0f5",
  storageBucket: "react-fb-auth-1b0f5.appspot.com",
  messagingSenderId: "144640254814",
  appId: "1:144640254814:web:f362b7e9f5d8974dba65cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);