import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
const firebaseConfig = {
  apiKey: "AIzaSyCl-tbqbfT4URsZP54JDBLQw04aZjtFCbw",
  authDomain: "shopapp-chat.firebaseapp.com",
  projectId: "shopapp-chat",
  storageBucket: "shopapp-chat.firebasestorage.app",
  messagingSenderId: "481019734064",
  appId: "1:481019734064:web:497de01469957f5be265f5",
  measurementId: "G-45HDK8BP5P",
};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);
