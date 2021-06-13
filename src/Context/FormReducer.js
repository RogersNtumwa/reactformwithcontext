import {
  ADD_AUTHOR,
  ADD_DESCRIPTION,
  ADD_NAME,
  NAME_ERROR,
  AUTHOR_ERROR,
  DESCRIPTION_ERROR,
} from "./Types";

const FormReducer = (state, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: {
          ...state.name,
          value: action.payload,
        },
      };
    case NAME_ERROR:
      return {
        ...state,
        name: {
          ...state.name,
          error: true,
          errorText: "Recipe name is required",
        },
      };

    case ADD_AUTHOR:
      return {
        ...state,
        author: {
          ...state.author,
          value: action.payload,
        },
      };
    case AUTHOR_ERROR:
      return {
        ...state,
        author: {
          ...state.name,
          error: true,
          errorText: "Author is required",
        },
      };
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: {
          ...state.description,
          value: action.payload,
        },
      };
    case DESCRIPTION_ERROR:
      return {
        ...state,
        description: {
          ...state.name,
          error: true,
          errorText: "Recipe description is required",
        },
      };
    default:
      return state;
  }
};

export default FormReducer;
