import React from "react";
import Typography from "@mui/material/Typography";
import Required from "../../utils/Required";
import Optional from "../../utils/Optional";

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
