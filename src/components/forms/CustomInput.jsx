import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function CustomInput({
  error,
  id,
  label,
  placeholder,
  defaultValue,
  description,
  variant,
  type,
  disabled,
}) {
  return (
    <Box component="form">
      <TextField
        id={id}
        label={label}
        type={type}
        defaultValue={defaultValue}
        error={error}
        placeholder={placeholder}
        helperText={description}
        variant={variant}
        disabled={disabled}
      />
    </Box>
  );
}
