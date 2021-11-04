import { useEffect, useState } from "react";
import { fetchDocs, RecipesResponse } from "firebaseApp/utils";
import { FirestoreQueryProps } from "firebaseApp/firestore";

export const useFetchDocs = ({
  collection,
  queries,
  orderByField,
  orderByDirection,
  perPage,
  cursorId,
}: FirestoreQueryProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [documents, setDocuments] = useState<RecipesResponse[]>([]);

  useEffect(() => {
    fetchDocs({
      collection,
      queries,
      orderByField,
      orderByDirection,
      perPage,
      cursorId,
    })
      .then((data) => {
        setDocuments(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [collection, queries, orderByField, orderByDirection, perPage, cursorId]);

  return { documents, isLoading, isError };
};
