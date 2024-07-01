// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-5b3d6.firebaseapp.com",
//   projectId: "reactchat-5b3d6",
//   storageBucket: "reactchat-5b3d6.appspot.com",
//   messagingSenderId: "798876272902",
//   appId: "1:798876272902:web:de21bf3eb6540dc890b687"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "newchatapp-6ba47.firebaseapp.com",
  projectId: "newchatapp-6ba47",
  storageBucket: "newchatapp-6ba47.appspot.com",
  messagingSenderId: "756585751069",
  appId: "1:756585751069:web:2b26fd9fcfae9165bc9cf4",
  measurementId: "G-GFE0L0FTTP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
