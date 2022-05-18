// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA6pX4l73ligBbZasBxWqa5ecXkmfbIEY",
  authDomain: "movie-9fb44.firebaseapp.com",
  projectId: "movie-9fb44",
  storageBucket: "movie-9fb44.appspot.com",
  messagingSenderId: "564661414794",
  appId: "1:564661414794:web:33089cd53a9b21e858b673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export default db;


