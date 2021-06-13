import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import { ADD_AUTHOR } from "../Context/Types";

function AuthorField() {
  const { formData, dispatch } = useContext(FormContext);
  const { author } = formData;
  return (
    <TextField
      fullWidth
      type="text"
      label="Author"
      name="author"
      value={author.value}
      error={author.error}
      helperText={author.errorText}
      onChange={(e) => {
        dispatch({
          type: ADD_AUTHOR,
          payload: e.target.value,
        });
      }}
      autoComplete="off"
    />
  );
}

export default AuthorField;
