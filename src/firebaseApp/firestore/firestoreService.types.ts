export type Collections = "recipes";

export interface FirestoreQueryProps {
  collection: Collections;
  queries?: any;
  orderByField?: any;
  orderByDirection?: any;
  perPage?: number;
  cursorId?: any;
}
