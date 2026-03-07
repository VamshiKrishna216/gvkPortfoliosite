import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCURb0286FYW3RUD8OKzijbA5gl2gHIxno",
  authDomain: "gvk-portfolio-8c78b.firebaseapp.com",
  projectId: "gvk-portfolio-8c78b",
  storageBucket: "gvk-portfolio-8c78b.firebasestorage.app",
  messagingSenderId: "145397024607",
  appId: "1:145397024607:web:e6f0c282dc622fad3698ea",
  measurementId: "G-CPSVLWMF9L"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization in Next.js dev mode)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
