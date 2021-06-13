import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import { ADD_DESCRIPTION } from "../Context/Types";

function DescriptionField() {
  const { formData, dispatch } = useContext(FormContext);
  const { description } = formData;
  return (
    <TextField
      fullWidth
      type="text"
      label="Description"
      name="description"
      value={description.value}
      multiline
      rows="4"
      autoComplete="off"
      error={description.error}
      helperText={description.errorText}
      onChange={(e) => {
        dispatch({
          type: ADD_DESCRIPTION,
          payload: e.target.value,
        });
      }}
    />
  );
}

export default DescriptionField;
