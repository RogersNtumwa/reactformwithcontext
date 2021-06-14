import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import FormContext from "../Context/FormContext";
import { ADD_AUTHOR, AUTHOR_ERROR, CLEAR_AUTHOR_FIELD } from "../Context/Types";

function AuthorField() {
  const { formData, dispatch, test, checkErrorOnblur } =
    useContext(FormContext);
  const { author } = formData;
  return (
    <TextField
      fullWidth
      type="text"
      label="Author"
      name="author"
      value={author.value}
      {...(test && {
        error: author.error,
        helperText: author.errorText,
      })}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_AUTHOR,
          payload: e.target.value,
        });
      }}
      onBlur={() => checkErrorOnblur(author, "Author", AUTHOR_ERROR, 3)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_AUTHOR_FIELD,
        });
      }}
    />
  );
}

export default AuthorField;
