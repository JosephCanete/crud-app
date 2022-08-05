import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import CardTitle from "./CardTitle";

export default function CardChild({ item }) {
  const [radioValue, setRadioValue] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [error, setError] = useState(false);

  const fieldValidator = (event) => {
    //Check if textfields are required
    item.required && !event.target.value ? setError(true) : setError(false);
  };

  return (
    <CardContent>
      <FormControl>
        <CardTitle item={item} />
        {item.questionType === "multi" ? (
          <>
            <FormLabel>Select one answer below:</FormLabel>
            {item.answer.map((answer, index) => (
              <React.Fragment key={index}>
                <RadioGroup
                  value={radioValue}
                  onChange={(event) => setRadioValue(event.target.value)}
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
              error={error}
              onBlur={(event) => fieldValidator(event)}
            />
          </>
        )}
      </FormControl>
    </CardContent>
  );
}
