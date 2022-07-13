// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDZ1H5DgvoSFoL-9FJ-7RihnPflT7-9NXI',
  authDomain: 'ember-4e1a8.firebaseapp.com',
  projectId: 'ember-4e1a8',
  storageBucket: 'ember-4e1a8.appspot.com',
  messagingSenderId: '433301656536',
  appId: '1:433301656536:web:a5fee2ee9d68585b92d8ad',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
