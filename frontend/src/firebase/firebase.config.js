// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQjPGuWk9sjTBUMs1mduHGzh0fbNaEBaA",
  authDomain: "mern-book-project-a6305.firebaseapp.com",
  projectId: "mern-book-project-a6305",
  storageBucket: "mern-book-project-a6305.appspot.com",
  messagingSenderId: "361901287734",
  appId: "1:361901287734:web:2bb3bbdd144faeca1dab97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;