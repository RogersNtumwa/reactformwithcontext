import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import {
  ADD_DESCRIPTION,
  CLEAR_DESC_FIELD,
  DESCRIPTION_ERROR,
} from "../Context/Types";

function DescriptionField() {
  const { formData, dispatch, test, checkErrorOnblur } =
    useContext(FormContext);
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
      {...(test && {
        error: description.error,
        helperText: description.errorText,
      })}
      onChange={(e) => {
        dispatch({
          type: ADD_DESCRIPTION,
          payload: e.target.value,
        });
      }}
      onBlur={() =>
        checkErrorOnblur(description, "description", DESCRIPTION_ERROR, 10)
      }
      onFocus={(e) => {
        dispatch({
          type: CLEAR_DESC_FIELD,
        });
      }}
    />
  );
}

export default DescriptionField;
