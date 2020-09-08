import React from "react";
import TextField from "@material-ui/core/TextField";

export function FindInput(prop) {
  return (
    <>
      <TextField
        style={{ width: 200 }}
        id="outlined-basic"
        label="filter"
        variant="outlined"
        name="filter"
        onChange={prop.onChange}
      />
    </>
  );
}
