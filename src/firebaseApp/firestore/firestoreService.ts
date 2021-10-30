import { firestore } from "firebaseApp/config";
import {
  addDoc,
  doc,
  getDoc,
  collection as firestoreCollection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
