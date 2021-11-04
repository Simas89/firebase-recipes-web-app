import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { createDocument } from "firebaseApp/firestore";
import { AddEditRecipeForm, Recipe } from ".";
import { IRecipe } from "types";
import { useStateSelector } from "state";
import { useMutation, useQuery } from "react-query";
import { fetchDocs } from "firebaseApp/utils";

const StyledContainer = styled(Container)`
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const HomeScreen: React.FC = () => {
  const user = useStateSelector(({ app }) => app.user);

  const { data: recipesData } = useQuery("recipes", () =>
    fetchDocs({ collection: "recipes" })
  );

  const { mutate } = useMutation((newRecipe: IRecipe) =>
    createDocument("recipes", newRecipe)
  );

  console.log(mutate);

  const handleAddRecipe = async (newRecipe: IRecipe) => {
    mutate(newRecipe);
  };

  return (
    <StyledContainer>
      {recipesData && (
        <div className="recipes-container">
          {recipesData.map((el, idx) => (
            <Recipe key={"recipe" + idx} />
          ))}
        </div>
      )}
      {user && <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />}
    </StyledContainer>
  );
};

export default HomeScreen;
