// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbtztAh_Qjv1TU5vHWl3CecwA-wmyJSpE",
  authDomain: "eccomerce-react-ch.firebaseapp.com",
  projectId: "eccomerce-react-ch",
  storageBucket: "eccomerce-react-ch.appspot.com",
  messagingSenderId: "155324447287",
  appId: "1:155324447287:web:91f9a4607cea4479359db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)