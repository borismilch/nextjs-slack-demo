import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDz1FFMK2hjvOAx1Pe7tGHNBcnvMEgW4aY",
  authDomain: "slack-ddd.firebaseapp.com",
  projectId: "slack-ddd",
  storageBucket: "slack-ddd.appspot.com",
  messagingSenderId: "1036924399209",
  appId: "1:1036924399209:web:9e5db564ffca3f916e3cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage()
export const firestore = getFirestore()
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()