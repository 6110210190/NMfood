import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyArhZz7BUDKhQSRXCBAnn322yoC_I6_H48",
    authDomain: "nmfood-95c2b.firebaseapp.com",
    projectId: "nmfood-95c2b",
    storageBucket: "nmfood-95c2b.appspot.com",
    messagingSenderId: "53021405968",
    appId: "1:53021405968:web:1144a1396102317e24eb95"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);