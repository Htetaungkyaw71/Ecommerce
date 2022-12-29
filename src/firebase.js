// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDi8zRkBckH7s-vRpJbqK8qp_CulDI-Vg",
  authDomain: "ecommerce-24c1c.firebaseapp.com",
  projectId: "ecommerce-24c1c",
  storageBucket: "ecommerce-24c1c.appspot.com",
  messagingSenderId: "1032322950607",
  appId: "1:1032322950607:web:7207b30d98e1ceb73f5eba",
  measurementId: "G-G5N8TD47B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);