import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import { ADD_NAME, NAME_ERROR, CLEAR_NAME_FIELD } from "../Context/Types";

function NameField() {
  const { formData, dispatch, test, checkErrorOnblur } =
    useContext(FormContext);
  const { name } = formData;
  return (
    <TextField
      fullWidth
      type="text"
      label="Name"
      name="name"
      value={name.value}
      autoComplete="off"
      {...(test && { error: name.error, helperText: name.errorText })}
      onChange={(e) => {
        dispatch({
          type: ADD_NAME,
          payload: e.target.value,
        });
      }}
      onBlur={() => checkErrorOnblur(name, "name", NAME_ERROR, 3)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_NAME_FIELD,
        });
      }}
    />
  );
}

export default NameField;
