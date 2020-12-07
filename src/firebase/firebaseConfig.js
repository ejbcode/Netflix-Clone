import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbv94ckz_NMKG0cw0Dr_KeeIm6HXwPzj4',
  authDomain: 'fir-login-6050d.firebaseapp.com',
  databaseURL: 'https://fir-login-6050d.firebaseio.com',
  projectId: 'fir-login-6050d',
  storageBucket: 'fir-login-6050d.appspot.com',
  messagingSenderId: '30687641564',
  appId: '1:30687641564:web:72ac3d26fde90cdcc29919',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
