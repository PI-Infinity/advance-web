import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyAZovKDr7m3QnYaKi4kIjArFa4qxs6Nc",
  authDomain: "advance-ena-1d06f.firebaseapp.com",
  projectId: "advance-ena-1d06f",
  storageBucket: "advance-ena-1d06f.firebasestorage.app",
  messagingSenderId: "226859115077",
  appId: "1:226859115077:web:fa790b26c17857fd2db92c",
  measurementId: "G-097LRWZVRF",
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const initAnalytics = async () => {
  if (typeof window === "undefined") return null;

  const supported = await isSupported();
  if (!supported) return null;

  return getAnalytics(app);
};
