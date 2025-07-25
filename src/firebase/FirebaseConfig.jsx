import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD-f-eyX_vvl__8Cwls9RbwZliWnUnFpU",
  authDomain: "e-commerce-cbed0.firebaseapp.com",
  projectId: "e-commerce-cbed0",
  storageBucket: "e-commerce-cbed0.firebasestorage.app",
  messagingSenderId: "653906335500",
  appId: "1:653906335500:web:3743a93a22491679d0db29",
  measurementId: "G-1P5H07HGVH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB=getFirestore(app);
const auth=getAuth(app);;
export{fireDB,auth};