import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR2tYDFC6LGVc_M89q6CWhMZKtpbeolgw",
  authDomain: "blog-react-fcc09.firebaseapp.com",
  projectId: "blog-react-fcc09",
  storageBucket: "blog-react-fcc09.firebasestorage.app",
  messagingSenderId: "862928904747",
  appId: "1:862928904747:web:4b4752b8f8230e524b006e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
