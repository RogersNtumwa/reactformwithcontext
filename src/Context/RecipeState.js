import React, { useReducer } from "react";
import RecipeContext from "./Recipecontext";

import RecipeReducer from "./RecipeReducer";
import Firebase from "../firebase";

import { ADD_RECIPE } from "./Types";

function RecipeState({ children }) {
  const initialState = {
    Recipe: {},
  };
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  const addRecipe = async (recipe) => {
    try {
      const response = await Firebase.addRecipe(recipe);
      dispatch({
        type: ADD_RECIPE,
        payload: response,
      });
    } catch (error) {}
  };
  return (
    <RecipeContext.Provider value={{ Recipe: state.Recipe, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeState;
