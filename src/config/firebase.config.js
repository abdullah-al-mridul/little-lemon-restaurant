// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_kgKFIbP5x1fdr3l6PHqZ03zhlr9_0U",
  authDomain: "little-lemon-restaurant-beta.firebaseapp.com",
  projectId: "little-lemon-restaurant-beta",
  storageBucket: "little-lemon-restaurant-beta.appspot.com",
  messagingSenderId: "771543272239",
  appId: "1:771543272239:web:f63c3d0d3836eced842fda",
  measurementId: "G-EZSRM3NTZH",
};

// Initialize Firebase
export const appConfig = initializeApp(firebaseConfig);
