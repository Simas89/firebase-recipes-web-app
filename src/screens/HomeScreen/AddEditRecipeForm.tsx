import {
  Select,
  TextField,
  SelectChangeEvent,
  MenuItem,
  Button,
} from "@mui/material";
import { Montserrat } from "common/typography";
import React, { useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { useMutation } from "react-query";
import { createDocument } from "firebaseApp/firestore";
import { RecipeDocModel } from "firebaseApp/api";

const Form = styled.form`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  max-width: 400px;

  .fields {
    display: flex;
    flex-direction: column;
  }
`;

const StyledTextField = styled(TextField).attrs({ size: "small" })`
  margin-bottom: 10px;
`;
const StyledSelect = styled(Select).attrs({ size: "small" })`
  margin-bottom: 10px;
`;

export const AddEditRecipeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [directions, setDirections] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientName, setIngredientName] = useState("");

  const { mutate: saveRecipe, isLoading } = useMutation(
    (newRecipe: RecipeDocModel) => createDocument("recipes", newRecipe),
    {
      onSuccess: (data) => {
        console.log("Yay!:", data);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.length) {
      alert("Ingredients cannot be empty!");
      return;
    }

    const isPublished = new Date(publishDate) <= new Date() ? true : false;

    const recipe = {
      name,
      category,
      directions,
      publishDate: new Date(publishDate),
      isPublished,
      ingredients,
    };

    saveRecipe(recipe);
  };

  const handleAddIngredient = () => {
    if (!ingredientName) {
      alert("No ingedient!");
      return;
    }
    setIngredients((state: any) => [...state, ingredientName]);
    setIngredientName("");
  };

  const handleDeleteIngredient = (e: string) => {
    setIngredients((state: string[]) => state.filter((el) => el !== e));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Paper elevation={10}>
        <Box px={5} py={3}>
          <Montserrat align="center" variant="h4">
            Add a new recipe
          </Montserrat>
          <div className="fields">
            <StyledTextField
              label="Recipe Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <StyledSelect
              required
              value={category}
              onChange={(e: SelectChangeEvent<string>) =>
                setCategory(e.target.value)
              }
            >
              <MenuItem value={"breadsSandwichesAndPizza"}>
                Breads, Sandwiches, and Pizza
              </MenuItem>
              <MenuItem value={"EggsAndBreakfast"}>Eggs & Breakfast</MenuItem>
              <MenuItem value={"desertsAndBakedGoods"}>
                Deserts & Baked Goods
              </MenuItem>
              <MenuItem value={"fishAndSeafood"}>Fish & Seafood</MenuItem>
              <MenuItem value={"vegetables"}>Vegetables</MenuItem>
            </StyledSelect>

            <StyledTextField
              label="Directions"
              multiline
              minRows={3}
              type="text"
              required
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
            />
            <StyledTextField
              label="Publish Date"
              type="date"
              required
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />

            <Montserrat variant="h5">Ingredients</Montserrat>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredient</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredients && ingredients.length > 0
                    ? ingredients.map((el: string) => (
                        <TableRow key={el}>
                          <TableCell>{el}</TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleDeleteIngredient(el)}
                              size="small"
                              variant="outlined"
                              color="error"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
            <Box m={1} />

            {ingredients && ingredients.length === 0 ? (
              <Montserrat>No Ingredients added</Montserrat>
            ) : null}

            <StyledTextField
              label="Ingredient"
              type="text"
              fullWidth
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              placeholder="Example: cucumber"
              // onKeyPress={handleAddIngredient}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button variant="contained" onClick={handleAddIngredient}>
                Add ingredient
              </Button>
            </Box>
            <Box m={1} />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                type="submit"
                disabled={isLoading}
              >
                Create Recipe
              </Button>
            </Box>
          </div>
        </Box>
      </Paper>
    </Form>
  );
};
