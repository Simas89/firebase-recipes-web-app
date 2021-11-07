import { auth } from "firebaseApp/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";

type AuthUser = (a: string, b: string) => Promise<UserCredential>;
type AuthChangesCB = (a: User | null) => void;

export const registerUser: AuthUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser: AuthUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = (): Promise<void> => signOut(auth);

export const sendUserPasswordResetEmail = (email: string) =>
  sendPasswordResetEmail(auth, email);

export const loginWithGoogle = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const subscribeToAuthChanges = (callback: AuthChangesCB) => {
  onAuthStateChanged(auth, (user) => callback(user));
};
