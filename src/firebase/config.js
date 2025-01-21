import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7uhuWhPGl5Tong-j85poDFRi-QzW0aQs",
  authDomain: "proyectofinal-db.firebaseapp.com",
  projectId: "proyectofinal-db",
  storageBucket: "proyectofinal-db.firebasestorage.app",
  messagingSenderId: "309912279601",
  appId: "1:309912279601:web:947f895bd8e8a9440a1310"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);