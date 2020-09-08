import React from "react";
import TextField from "@material-ui/core/TextField";

export function TelInput(prop) {
  return (
    <>
      <TextField
        style={{ width: 200, margin: 10 }}
        id="outlined-basic"
        label={prop.name}
        variant="outlined"
        name={prop.name}
        onChange={prop.onChange}
        value={prop.value}
      />
    </>
  );
}
