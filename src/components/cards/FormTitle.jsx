import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function FormTitle() {
  const [title, setTitle] = useState("Untitled form");

  return (
    <TextField
      style={{ marginBottom: "2rem" }}
      component="div"
      id="standard-basic"
      value={title}
      variant="standard"
      placeholder="Form title.."
      onChange={(event) => setTitle(event.currentTarget.value)}
    />
  );
}
