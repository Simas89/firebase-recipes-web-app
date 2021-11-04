import { DocumentData, QuerySnapshot } from "@firebase/firestore";
import { Collections } from "firebaseApp/firestore";
import { RecipesResponse } from ".";

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
  recipes: (el: any): Promise<RecipesResponse> => {
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
};
