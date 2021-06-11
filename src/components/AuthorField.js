import React from "react";
import { TextField } from "@material-ui/core";

function AuthorField({ value, onChangeHandler }) {
  return (
    <TextField
      fullWidth
      type="text"
      label="Recipe Author"
      name="author"
      placeholder="Enter Recipe author"
      value={value}
      onChange={onChangeHandler}
      autoComplete="off"
    />
  );
}

export default AuthorField;
