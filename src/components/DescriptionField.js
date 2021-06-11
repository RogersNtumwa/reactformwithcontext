import React from "react";
import { TextField } from "@material-ui/core";

function DescriptionField({ value, onChangeHandler }) {
  return (
    <TextField
      fullWidth
      type="text"
      label="Recipe Description"
      name="description"
      placeholder="Enter Recipe Description"
      value={value}
      error={false}
      multiline
      rows="4"
      onChange={onChangeHandler}
      autoComplete="off"
    />
  );
}

export default DescriptionField;
