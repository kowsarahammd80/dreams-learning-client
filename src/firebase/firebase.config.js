// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1cUuCgAlbm9r4js6PZI0Tzdql2gv49z0",
  authDomain: "dreams-learning.firebaseapp.com",
  projectId: "dreams-learning",
  storageBucket: "dreams-learning.appspot.com",
  messagingSenderId: "200324021792",
  appId: "1:200324021792:web:609dee7e9fd71f94740645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;