import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrz0CvuHfvwkTeXx-oDwnOrcvTo_vw_Zc",
  authDomain: "facebook-clone-2024a.firebaseapp.com",
  projectId: "facebook-clone-2024a",
  storageBucket: "facebook-clone-2024a.appspot.com",
  messagingSenderId: "165334964581",
  appId: "1:165334964581:web:33778e0196a83a8b82a98c",
  measurementId: "G-5851T3PHG2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
