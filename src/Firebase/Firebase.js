// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj6sMdvBsPbwo58QgdznV6N2NwY_AsGio",
  authDomain: "gallardoreactmarket.firebaseapp.com",
  projectId: "gallardoreactmarket",
  storageBucket: "gallardoreactmarket.appspot.com",
  messagingSenderId: "1021188210249",
  appId: "1:1021188210249:web:89dddd65a70d343ce34998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)