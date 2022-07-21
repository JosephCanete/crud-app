import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Cards({ data }) {
  const defaultOption = ["Games", "Programming", "Motorcycling", "Biking"];
  const [isRadio, setIsRadio] = useState(false);

  return (
    <>
      <Card maxWidth="xs" style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <TextField
            InputProps={{ disableUnderline: true }}
            component="div"
            id="standard-basic"
            value="Untitled form"
            variant="standard"
            maxWidth="100%"
            style={{ marginBottom: "2rem" }}
          />
          <Typography gutterBottom variant="h5" component="div">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </CardContent>
      </Card>
      <Card maxWidth="xs" style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            What do you want to be when you grow up?
          </Typography>
          <FormControl>
            <FormLabel>Select one answer below:</FormLabel>
            <RadioGroup defaultValue="null" name="radio-buttons-group">
              {defaultOption.map((item) => (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card maxWidth="xs" style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            What do you want to be when you grow up?
          </Typography>
          <FormControl>
            <FormLabel>Select one answer below:</FormLabel>
            <RadioGroup defaultValue="null" name="radio-buttons-group">
              {isRadio ? (
                defaultOption.map((item) => (
                  <FormControlLabel
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              ) : (
                <TextField
                  maxWidth="auto"
                  label="name"
                  id="standard-basic"
                  variant="standard"
                />
              )}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card maxWidth="xs" style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            What do you want to be when you grow up?
          </Typography>
          <FormControl>
            <FormLabel>Select one answer below:</FormLabel>
            <RadioGroup defaultValue="null" name="radio-buttons-group">
              {defaultOption.map((item) => (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}
