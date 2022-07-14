import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton({ spacing, direction, variant, label }) {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button variant={variant}>{label}</Button>
    </Stack>
  );
}

// export default function BasicButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
//   );
// }
