import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'netflix-clone-with-auth.firebaseapp.com',
  projectId: 'netflix-clone-with-auth',
  storageBucket: 'netflix-clone-with-auth.appspot.com',
  messagingSenderId: '962049632426',
  appId: '1:962049632426:web:4ab4e1283a1c40706d48d3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
