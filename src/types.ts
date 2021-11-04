export interface IRecipe {
  name: string;
  category: string;
  directions: string;
  publishDate: Date;
  isPublished: boolean;
  ingredients: string[];
}
