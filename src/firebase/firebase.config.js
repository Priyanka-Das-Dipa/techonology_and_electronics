import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq1Q-ppdAWP4gK7Dn55x7ykSjMuoewlmU",
  authDomain: "technology-and-electroni-8514d.firebaseapp.com",
  projectId: "technology-and-electroni-8514d",
  storageBucket: "technology-and-electroni-8514d.appspot.com",
  messagingSenderId: "949081362340",
  appId: "1:949081362340:web:f283155c28d77f87c7bb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;