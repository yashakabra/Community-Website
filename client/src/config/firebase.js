import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBeMkqrC44Y5si46s7hlbQxcSIOV3yqFvs",
  authDomain: "community-website-8273c.firebaseapp.com",
  projectId: "community-website-8273c",
  storageBucket: "community-website-8273c.appspot.com",
  messagingSenderId: "1040952183669",
  appId: "1:1040952183669:web:e2a4f89a2280a963b5213c",
  measurementId: "G-QFDHMJKT1P"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const auth = getAuth(app);
export default app;

