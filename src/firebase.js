import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBR2aOPhTYIU03MfeWAkLnzV6G1l6-Y1T4",
   authDomain: "twitter-clone-a0458.firebaseapp.com",
   databaseURL: "https://twitter-clone-a0458.firebaseio.com",
   projectId: "twitter-clone-a0458",
   storageBucket: "twitter-clone-a0458.appspot.com",
   messagingSenderId: "319464184282",
   appId: "1:319464184282:web:9bfcbef2d3ae3b99acc8e3",
   measurementId: "G-1B537QM8M7"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig)

 const db = firebaseApp.firestore();

 export default db;