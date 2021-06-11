import React, { useReducer, useContext } from "react";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import NameField from "../components/NameField";
import AuthorField from "../components/AuthorField";
import DescriptionField from "../components/DescriptionField";
import RecipeContext from "../Context/Recipecontext";

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

function AddRecipe() {
  const { addRecipe } = useContext(RecipeContext);
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(state);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLEE_TEXT_INPUT":
        return {
          ...state,
          [action.field]: action.payload,
        };

      default:
        return state;
    }
  };

  const initialState = {
    name: "",
    author: "",
    description: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const onChangeHandler = (e) => {
    dispatch({
      type: "HANDLEE_TEXT_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <Grid>
      <StyledPaper elevation={5}>
        <Grid align="center">
          <h2>Add Recipe</h2>
        </Grid>
        <form className={classes.root} onSubmit={handleSubmit}>
          <NameField
            value={state.name}
            onChangeHandler={onChangeHandler}
            dispatch={dispatch}
          />
          <AuthorField
            value={state.author}
            onChangeHandler={onChangeHandler}
            dispatch={dispatch}
          />
          <DescriptionField
            value={state.description}
            onChangeHandler={onChangeHandler}
            dispatch={dispatch}
          />

          <Button type="submit" variant="contained">
            Add Recipe
          </Button>
        </form>
      </StyledPaper>
    </Grid>
  );
}

export default AddRecipe;
