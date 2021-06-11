import { ADD_RECIPE } from "./Types";

const RecipeReducer = (state, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        Recipe: action.payload,
      };
    default:
      return state;
  }
};

export default RecipeReducer;
