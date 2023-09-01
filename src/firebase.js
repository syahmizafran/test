// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6_IBTK0MuIqUAvm3LGWXQigXmcskB-zg",
  authDomain: "test-f9b52.firebaseapp.com",
  projectId: "test-f9b52",
  storageBucket: "test-f9b52.appspot.com",
  messagingSenderId: "459273463765",
  appId: "1:459273463765:web:e40dcc0e19eb5ae15fbf5c",
  measurementId: "G-2QJKT288Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app)

export{app, auth, db}