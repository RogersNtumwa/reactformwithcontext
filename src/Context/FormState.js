import React, { useReducer } from "react";
import FormContext from "./FormContext";

import FormReducer from "./FormReducer";

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
  
  const validate = () => {
    const test = {};
    test.name = state.name.value ? "" : state.name.errorText;
    test.author = state.author.value ? "" : state.author.errorText;
    test.description = state.description.value
      ? ""
      : state.description.errorText;
    return Object.values(test).every((x) => x === "");
  };

  return (
    <FormContext.Provider value={{ formData: state, dispatch, validate }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormState;
