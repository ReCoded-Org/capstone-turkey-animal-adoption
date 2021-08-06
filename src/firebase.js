import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ODWZJawR9OxaVsB64wPiENb_Ppbl76M",
  authDomain: "animal-adoption-445ae.firebaseapp.com",
  projectId: "animal-adoption-445ae",
  storageBucket: "animal-adoption-445ae.appspot.com",
  messagingSenderId: "422769881314",
  appId: "1:422769881314:web:cc2fec07ef035763ceaebb",
  measurementId: "G-3N2WMZF422",
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
