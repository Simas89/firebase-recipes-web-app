import { Paper } from "@mui/material";
import styled from "styled-components";
import { Montserrat } from "common/typography";
import { RecipeDocResponse } from "firebaseApp/api";

const Wrapper = styled(Paper).attrs({ elevation: 6 })`
  padding: 10px;
  margin: 10px;
`;

interface IRecipeProps {
  recipe: RecipeDocResponse;
}
export const Recipe: React.FC<IRecipeProps> = ({ recipe }) => {
  return (
    <Wrapper>
      <Montserrat>{recipe.name}</Montserrat>
      <Montserrat>{recipe.category}</Montserrat>
      <Montserrat>{recipe.publishDate}</Montserrat>
      <Montserrat color={recipe.isPublished ? "" : "error"}>
        {recipe.isPublished ? "PUBLISHED" : "UNPUBLISHED"}
      </Montserrat>
    </Wrapper>
  );
};
