import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_6_d26vQLY-80A46G1XACa5L6ET8vZGo",
  authDomain: "quasar-todo-7f402.firebaseapp.com",
  projectId: "quasar-todo-7f402",
  storageBucket: "quasar-todo-7f402.appspot.com",
  messagingSenderId: "269993161608",
  appId: "1:269993161608:web:fdbe107a077d9c60fc003d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}