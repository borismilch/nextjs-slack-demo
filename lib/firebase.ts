import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChIXPArasxixlaYEpEcNyTXlEZbxV3b7w",
  authDomain: "builo-tube.firebaseapp.com",
  projectId: "builo-tube",
  storageBucket: "builo-tube.appspot.com",
  messagingSenderId: "327334058483",
  appId: "1:327334058483:web:ea58de9141b30905295a86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage()
export const firestore = getFirestore()
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()