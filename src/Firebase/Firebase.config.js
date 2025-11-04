// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKjlkDqg1bLx-3SKf5Sx6yOwWptAOAzt8",
  authDomain: "dragon-news-project-1803a.firebaseapp.com",
  projectId: "dragon-news-project-1803a",
  storageBucket: "dragon-news-project-1803a.firebasestorage.app",
  messagingSenderId: "234018148423",
  appId: "1:234018148423:web:40cd4f983b855f251fe162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);