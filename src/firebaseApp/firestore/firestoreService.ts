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
import { Collections, FirestoreQueryProps } from "./firestoreService.types";

export const createDocument = (collection: Collections, document: any) =>
  addDoc(firestoreCollection(firestore, collection), document);

export const readDocument = (collection: Collections, id: string) =>
  getDoc(doc(firestoreCollection(firestore, collection), id));

// @ts-ignore
export const readDocuments = async ({
  collection,
  queries,
  orderByField,
  orderByDirection,
  perPage,
  cursorId,
}: FirestoreQueryProps) => {
  const collectionRef = firestoreCollection(firestore, collection);

  const queryConstraints = [];

  if (queries && queries.length) {
    for (const query of queries) {
      queryConstraints.push(where(query.field, query.condition, query.value));
    }
  }

  if (orderByField && orderByDirection) {
    queryConstraints.push(orderBy(orderByField, orderByDirection));
  }

  if (perPage) {
    queryConstraints.push(limit(perPage));
  }

  if (cursorId) {
    const document = await readDocument(collection, cursorId);
    queryConstraints.push(startAfter(document));
  }

  const firestoreQuery = query(collectionRef, ...queryConstraints);

  return getDocs(firestoreQuery);
};

export const updateDocument = (
  collection: Collections,
  id: string,
  document: any
) => updateDoc(doc(firestoreCollection(firestore, collection), id), document);

export const deleteDocument = (collection: Collections, id: string) =>
  deleteDoc(doc(firestoreCollection(firestore, collection), id));
