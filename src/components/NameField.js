import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import { ADD_NAME } from "../Context/Types";

function NameField() {
  const { formData, dispatch } = useContext(FormContext);
  const { name } = formData;
  return (
    <TextField
      fullWidth
      type="text"
      label="Name"
      name="name"
      value={name.value}
      autoComplete="off"
      error={name.error}
      helperText={name.errorText}
      onChange={(e) => {
        dispatch({
          type: ADD_NAME,
          payload: e.target.value,
        });
      }}
    />
  );
}

export default NameField;
