// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsw27kH8XsXnHCipix3cq8gd3CbDGvZ7w",
  authDomain: "art-and-craft-be241.firebaseapp.com",
  projectId: "art-and-craft-be241",
  storageBucket: "art-and-craft-be241.appspot.com",
  messagingSenderId: "916022820630",
  appId: "1:916022820630:web:229886b0528b5ea9bf9a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


