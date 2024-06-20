import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5b3d6.firebaseapp.com",
  projectId: "reactchat-5b3d6",
  storageBucket: "reactchat-5b3d6.appspot.com",
  messagingSenderId: "798876272902",
  appId: "1:798876272902:web:de21bf3eb6540dc890b687"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
