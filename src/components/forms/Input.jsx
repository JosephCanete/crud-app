import { TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { inputValidation } from "./InputValidation";

export default function Input({ id, name, label, type, value }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    inputValidation: inputValidation,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <TextField
      fullWidth
      id={id}
      name={name}
      label={label}
      type={type}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
    />
  );
}
