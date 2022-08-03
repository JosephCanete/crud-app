import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";

export default function CardChild({ item }) {
  const [value, setValue] = useState("");

  return (
    <CardContent>
      <FormControl>
        {item.questionType === "multi" ? (
          <>
            <FormLabel>Select one answer below:</FormLabel>
            {item.answer.map((answer, index) => (
              <React.Fragment key={index}>
                <RadioGroup
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                >
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
