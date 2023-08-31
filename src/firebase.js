// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = getAuth(app)

export{app, auth}