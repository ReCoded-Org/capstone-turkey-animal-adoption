import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-ODWZJawR9OxaVsB64wPiENb_Ppbl76M",
  authDomain: "animal-adoption-445ae.firebaseapp.com",
  projectId: "animal-adoption-445ae",
  storageBucket: "animal-adoption-445ae.appspot.com",
  messagingSenderId: "422769881314",
  appId: "1:422769881314:web:cc2fec07ef035763ceaebb",
  measurementId: "G-3N2WMZF422",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider, app };
