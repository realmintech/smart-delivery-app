import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase-config";

// Register a new user
export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login existing user
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return await signOut(auth);
};

// Sign in with Google
export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

// Sign in with Facebook
export const signInWithFacebook = async () => {
  return await signInWithPopup(auth, facebookProvider);
};
