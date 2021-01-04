import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD0MPPR3YasGU-00V-L6qpjnsNDK1DkKEw",
  authDomain: "react-app-c429c.firebaseapp.com",
  projectId: "react-app-c429c",
  storageBucket: "react-app-c429c.appspot.com",
  messagingSenderId: "847943235130",
  appId: "1:847943235130:web:b03e0243443473eeb32703"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase
}