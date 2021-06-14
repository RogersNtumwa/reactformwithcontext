import React, { useContext } from "react";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import NameField from "../components/NameField";
import AuthorField from "../components/AuthorField";
import DescriptionField from "../components/DescriptionField";
import RecipeContext from "../Context/Recipecontext";
import FormContext from "../Context/FormContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledPaper = styled(Paper)({
  padding: "30px 20px",
  width: "500px",
  margin: "20px auto",
});

function AddRecipeForm() {
  const classes = useStyles();

  const { addRecipe } = useContext(RecipeContext);
  const { formData, validate } = useContext(FormContext);
  const {
    name: { value: name },
    author: { value: author },
    description: { value: description },
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate({ name, author, description })) {
      addRecipe({ name, author, description });
    }
  };
  return (
    <Grid>
      <StyledPaper elevation={5}>
        <Grid align="center">
          <h2>Add Recipe</h2>
        </Grid>

        <form className={classes.root} onSubmit={handleSubmit}>
          <NameField />
          <AuthorField />
          <DescriptionField />
          <Button type="submit" variant="contained">
            Add Recipe
          </Button>
        </form>
      </StyledPaper>
    </Grid>
  );
}

export default AddRecipeForm;
