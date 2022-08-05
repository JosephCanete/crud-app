import React from "react";
import Typography from "@mui/material/Typography";
import Required from "../../utility/Required";
import Optional from "../../utility/Optional";

export default function CardTitle({ item }) {
  return (
    <Typography
      gutterBottom
      variant="h6"
      component="div"
      style={{ paddingRight: "10rem" }}
    >
      {item.headerTitle}
      {item.required ? <Required /> : <Optional />}
    </Typography>
  );
}
