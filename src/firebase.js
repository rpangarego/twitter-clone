import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqAv0YpZzywNBt99_pTTXezHe2oKHD9ck",
  authDomain: "twitter-clone-91366.firebaseapp.com",
  databaseURL: "https://twitter-clone-91366.firebaseio.com",
  projectId: "twitter-clone-91366",
  storageBucket: "twitter-clone-91366.appspot.com",
  messagingSenderId: "749331142316",
  appId: "1:749331142316:web:db8fab34a43688cfa33109",
  measurementId: "G-240ELJMMXM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
