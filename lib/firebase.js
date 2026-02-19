import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYQwhIoiY6pA9tv7dIsVCsBxmsdICqQPA",
  authDomain: "ai-assessment-platform-1ff6b.firebaseapp.com",
  projectId: "ai-assessment-platform-1ff6b",
  storageBucket: "ai-assessment-platform-1ff6b.firebasestorage.app",
  messagingSenderId: "561138350970",
  appId: "1:561138350970:web:283b381df4c146eafcb4c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
