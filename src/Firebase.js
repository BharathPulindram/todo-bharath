import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaSD7V0x6ojrYNAEUq-L2vMYXBFwsYUZ4",
  authDomain: "todo-bharath-9fa32.firebaseapp.com",
  databaseURL: "https://todo-bharath-9fa32.firebaseio.com",
  projectId: "todo-bharath-9fa32",
  storageBucket: "todo-bharath-9fa32.appspot.com",
  messagingSenderId: "1039731399468",
  appId: "1:1039731399468:web:e34c2b97a99d5fddd5ea89",
  measurementId: "G-KME2TRQTVE"

});

const db = firebaseApp.firestore();

export default db ;