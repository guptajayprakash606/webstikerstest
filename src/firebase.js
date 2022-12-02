// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyATpQNOyGkfbCIkFVLTkxlUvQmM0kimhkE",
  authDomain: "testinterview-8aa69.firebaseapp.com",
  projectId: "testinterview-8aa69",
  storageBucket: "testinterview-8aa69.appspot.com",
  messagingSenderId: "1013399752262",
  appId: "1:1013399752262:web:463db8641706f11f138447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;


