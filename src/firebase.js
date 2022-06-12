// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOsxlxHJPr1U9Ra1IQThQK31-9P9Pj56Q",
  authDomain: "clone-bda87.firebaseapp.com",
  projectId: "clone-bda87",
  storageBucket: "clone-bda87.appspot.com",
  messagingSenderId: "842760335812",
  appId: "1:842760335812:web:4e4afaa920e9231e297491",
  measurementId: "G-9WBR77BHCV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
