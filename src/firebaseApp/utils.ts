import { DocumentData, QuerySnapshot } from "@firebase/firestore";
import { readDocuments, FirestoreQueryProps } from "firebaseApp/firestore";
import { Collections } from "./api";

export const fetchDocs = async ({
  collection,
  queries,
  orderByField,
  orderByDirection,
  perPage,
  cursorId,
}: FirestoreQueryProps) => {
  try {
    const snapshot = await readDocuments({
      collection,
      queries,
      orderByField,
      orderByDirection,
      perPage,
      cursorId,
    });

    const docs = parseSnapshot(snapshot);
    const parsedDocs = await parseDocs(collection, docs);

    return parsedDocs;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const parseSnapshot = (snap: QuerySnapshot<DocumentData>) =>
  snap.docs.map((el) => {
    return { id: el.id, ...el.data() };
  });

export const parseDocs = async (
  collection: Collections,
  docs: DocumentData[]
) => {
  const data = docs.map((el) => documentCollectionParser[collection](el));
  const response = await Promise.all(data);
  return response;
};

export const documentCollectionParser = {
  recipes: (el: any) => {
    return new Promise(async (resolve) => {
      const id = el.id;
      const category = el.category;
      const ingredients = el.ingredients;
      const isPublished = el.isPublished;
      const name = el.name;
      const publishDate = el.publishDate.toDate().toLocaleDateString();

      resolve({ id, category, ingredients, isPublished, name, publishDate });
    });
  },
  test: (el: any) => {
    return new Promise(async (resolve) => {
      const id = el.id;

      resolve({ id, ...el });
    });
  },
};
