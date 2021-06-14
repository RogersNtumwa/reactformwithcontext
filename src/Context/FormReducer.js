import {
  ADD_AUTHOR,
  ADD_DESCRIPTION,
  ADD_NAME,
  NAME_ERROR,
  AUTHOR_ERROR,
  DESCRIPTION_ERROR,
  CLEAR_DESC_FIELD,
  CLEAR_NAME_FIELD,
  CLEAR_AUTHOR_FIELD,
} from "./Types";

const FormReducer = (state, action) => {
  switch (action.type) {
    // Name field
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
          errorText: action.payload,
        },
      };

    case CLEAR_NAME_FIELD:
      return {
        ...state,
        name: {
          ...state.name,
          error: false,
          errorText: "",
        },
      };

    // author field
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
          ...state.author,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_AUTHOR_FIELD:
      return {
        ...state,
        author: {
          ...state.author,
          error: false,
          errorText: "",
        },
      };

    // Description field
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
          ...state.description,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_DESC_FIELD:
      return {
        ...state,
        description: {
          ...state.description,
          error: false,
          errorText: "",
        },
      };
    default:
      return state;
  }
};

export default FormReducer;
