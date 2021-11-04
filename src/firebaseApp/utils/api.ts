import { FirestoreQueryProps, readDocuments } from "firebaseApp/firestore";
import { parseDocs, parseSnapshot } from ".";

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
