// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHzU-MGL0A-76-9eYvNdv_5B9vANRz_3c',
  authDomain: 'websoft-62b0c.firebaseapp.com',
  projectId: 'websoft-62b0c',
  storageBucket: 'websoft-62b0c.appspot.com',
  messagingSenderId: '1076803796354',
  appId: '1:1076803796354:web:abc42a499a666289f0e39b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db};
