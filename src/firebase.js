import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbIEFsKPx09D3DMdcnQygHYBaO7wqUi6I",
  authDomain: "restoran-b740a.firebaseapp.com",
  databaseURL: "https://restoran-b740a-default-rtdb.firebaseio.com",
  projectId: "restoran-b740a",
  storageBucket: "restoran-b740a.firebasestorage.app",
  messagingSenderId: "280188188742",
  appId: "1:280188188742:web:ecbd959d6a1646dab9b247",
  measurementId: "G-XDWDHM1EQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
