import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbywdraQ4MDHnk9oqcIJbbLlugv5aa_lo",
  authDomain: "facebook-clone-f95c2.firebaseapp.com",
  projectId: "facebook-clone-f95c2",
  storageBucket: "facebook-clone-f95c2.appspot.com",
  messagingSenderId: "186194230272",
  appId: "1:186194230272:web:7836eea15c833afda26ce5",
  measurementId: "G-28MJZ51GQV",
  databaseURL: "https://posts.nam5.firebasedatabase.app"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
