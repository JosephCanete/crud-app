import React from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";

export default function CardChild({ item }) {
  return (
    <CardContent>
      <FormControl>
        {item.questionType === "multi" ? (
          <>
            <FormLabel>Select one answer below:</FormLabel>
            {item.answer.map((answer, index) => (
              <React.Fragment key={index}>
                <RadioGroup defaultValue="null" name="radio-buttons-group">
                  <FormControlLabel
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                </RadioGroup>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <FormLabel>Answer here:</FormLabel>
            <TextField
              multiline={true}
              id="standard-basic"
              variant="standard"
              size="medium"
              sx={{ width: "50rem" }}
            />
          </>
        )}
      </FormControl>
    </CardContent>
  );
}
