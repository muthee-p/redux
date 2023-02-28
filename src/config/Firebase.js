
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "${process.env.REACT_APP_API_KEY}",
  authDomain: "redux-38b86.firebaseapp.com",
  projectId: "redux-38b86",
  storageBucket: "redux-38b86.appspot.com",
  messagingSenderId: "186324219924",
  appId: "1:186324219924:web:ddd2a468a674fb0b758f01",
  measurementId: "G-502WGHEJ6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
