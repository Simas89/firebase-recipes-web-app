import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { AddEditRecipeForm, Recipe } from ".";
import { useStateSelector } from "state";
import { useQuery } from "react-query";
import { getRecipes } from "firebaseApp/api";

const StyledContainer = styled(Container)`
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const HomeScreen: React.FC = () => {
  const user = useStateSelector(({ app }) => app.user);
  const [perPage, setPerPage] = useState(3);
  const [cursorId, setCursorId] = useState("");

  const queries: any[] = [];
  // const queries = [{ field: "isPublished", condition: "==", value: true }];
  // const queries = [
  //   // { field: "category", condition: "==", value: "EggsAndBreakfast" },
  //   // { field: "isPublished", condition: "==", value: false },
  // ];

  const orderBy = { field: "publishDate", direction: "asc" };

  const { data: recipesData } = useQuery(
    [
      "recipes",
      {
        queries,
        orderByField: orderBy.field,
        orderByDirection: orderBy.direction,
        perPage,
        cursorId,
      },
    ],
    (params) => getRecipes(params)
  );

  // useEffect(() => {
  //   if (recipesData && recipesData[perPage - 1]) {
  //     const id = recipesData[perPage - 1].id;
  //     setCursorId(id);
  //   }
  // }, [recipesData]);

  const nextPage = () => {
    if (recipesData && recipesData[perPage - 1]) {
      const id = recipesData[perPage - 1].id;
      setCursorId(id);
    }
  };

  return (
    <StyledContainer>
      <button onClick={() => setPerPage((state) => (state = state - 1))}>
        per page --
      </button>
      <button onClick={() => setPerPage((state) => (state = state + 1))}>
        per page ++
      </button>
      <button onClick={nextPage}>NEXT PAGE</button>
      {recipesData && (
        <div className="recipes-container">
          {recipesData.map((el) => (
            <Recipe key={el.id} recipe={el} />
          ))}
        </div>
      )}
      {user && <AddEditRecipeForm />}
    </StyledContainer>
  );
};

export default HomeScreen;
