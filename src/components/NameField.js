import React from "react";
import { TextField } from "@material-ui/core";

function NameField({ value, onChangeHandler }) {
  return (
    <TextField
      fullWidth
      type="text"
      label="Recipe Name"
      name="name"
      placeholder="Enter Recipe name"
      value={value}
      onChange={onChangeHandler}
      autoComplete="off"
    />
  );
}

export default NameField;
