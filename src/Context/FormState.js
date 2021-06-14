import React, { useReducer } from "react";
import FormContext from "./FormContext";

import FormReducer from "./FormReducer";
import { ADD_NAME, AUTHOR_ERROR, DESCRIPTION_ERROR, NAME_ERROR } from "./Types";

function FormState({ children }) {
  const initialState = {
    name: {
      value: "",
      error: false,
      errorText: "",
    },
    author: {
      value: "",
      error: false,
      errorText: "",
    },
    description: {
      value: "",
      error: false,
      errorText: "",
    },
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const test = {};

  const validate = (formData) => {
    if (formData.name === "") {
      dispatch({
        type: NAME_ERROR,
        payload: "Recipe name is required",
      });
    } else if (formData.name.length < 3) {
      dispatch({
        type: NAME_ERROR,
        payload: "Recipe name should be atleast three characters long",
      });
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      dispatch({
        type: NAME_ERROR,
        payload: "Invalid Name. Avoid Special characters",
      });
    } else {
      dispatch({
        type: ADD_NAME,
        payload: formData.name,
      });
    }

    if (formData.author === "") {
      dispatch({
        type: AUTHOR_ERROR,
        payload: "Author is required",
      });
    } else if (formData.author.length < 3) {
      dispatch({
        type: AUTHOR_ERROR,
        payload: "Author should be atleast three characters long",
      });
    }

    if (formData.description === "") {
      dispatch({
        type: DESCRIPTION_ERROR,
        payload: "Recipe description is required",
      });
    }

    test.name = formData.name ? "" : state.name.errorText;
    test.author = formData.author ? "" : state.author.errorText;
    test.description = formData.description ? "" : state.description.errorText;
    debugger;
    return Object.values(test).every((x) => x === "");
  };

  const checkErrorOnblur = (fieldvalue, fieldName, fieldType, NO_Charaters) => {
    if (fieldvalue.value === "") {
      dispatch({
        type: fieldType,
        payload: `Recipe ${fieldName} is required`,
      });
    } else if (fieldvalue.value.length < NO_Charaters) {
      dispatch({
        type: fieldType,
        payload: `Recipe ${fieldName} should be atleast ${NO_Charaters} characters long`,
      });
    } else if (!/^[a-zA-Z ]+$/.test(fieldvalue.value)) {
      dispatch({
        type: fieldType,
        payload: `Invalid ${fieldName}. Avoid Special characters`,
      });
    }
  };

  return (
    <FormContext.Provider
      value={{ formData: state, dispatch, validate, test, checkErrorOnblur }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormState;
