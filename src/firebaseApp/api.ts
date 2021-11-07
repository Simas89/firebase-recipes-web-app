import { QueryFunctionContext } from "react-query";
import { fetchDocs } from "./utils";

export type Collections = "recipes" | "test";

export interface RecipeDocModel {
  name: string;
  category: string;
  directions: string;
  publishDate: Date;
  isPublished: boolean;
  ingredients: string[];
}
export interface RecipeDocResponse {
  id: string;
  category: string;
  ingredients: string[];
  isPublished: boolean;
  name: string;
  publishDate: string;
}

export const getRecipes = (params: QueryFunctionContext<any>) => {
  return fetchDocs({
    collection: "recipes",
    ...params.queryKey[1],
  }) as Promise<RecipeDocResponse[]>;
};
