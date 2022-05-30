// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtzuuALsBL1zuR1A9A4DenTPO1Tyzb6Lk",
  authDomain: "nmfood-b8247.firebaseapp.com",
  projectId: "nmfood-b8247",
  storageBucket: "nmfood-b8247.appspot.com",
  messagingSenderId: "388322400280",
  appId: "1:388322400280:web:b662db575c8d192a160b6d",
  measurementId: "G-PNWT3TWB8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;