import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";

export default function Cards({ data }) {
  const mockContent = [
    {
      headerTitle: "What is your name?",
      questionType: "single",
      answer: "",
    },
    {
      headerTitle: "What do you want to be when you grow up?",
      questionType: "multi",
      answer: [
        "Web Developer",
        "Node Js Developer",
        "Data Analyst",
        "React Developer",
      ],
    },
    {
      headerTitle: "What is your name?",
      questionType: "single",
      answer: "",
    },
    {
      headerTitle: "What do you want to be when you grow up?",
      questionType: "multi",
      answer: [
        "Web Developer",
        "Node Js Developer",
        "Data Analyst",
        "React Developer",
      ],
    },
    {
      headerTitle: "What is your name?",
      questionType: "single",
      answer: "",
    },
    {
      headerTitle: "What do you want to be when you grow up?",
      questionType: "multi",
      answer: [
        "Web Developer",
        "Node Js Developer",
        "Data Analyst",
        "React Developer",
      ],
    },
    {
      headerTitle: "What is your name?",
      questionType: "single",
      answer: "",
    },
    {
      headerTitle: "What do you want to be when you grow up?",
      questionType: "multi",
      answer: [
        "Web Developer",
        "Node Js Developer",
        "Data Analyst",
        "React Developer",
      ],
    },
  ];

  const defaultOption = ["Games", "Programming", "Motorcycling", "Biking"];
  const [isRadio, setIsRadio] = useState(false);
  const [title, setTitle] = useState("Untitled form");

  return (
    <>
      <Card style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <TextField
            style={{ marginBottom: "2rem" }}
            component="div"
            id="standard-basic"
            value={title}
            variant="standard"
            placeholder="Form title.."
            onChange={(event) => setTitle(event.currentTarget.value)}
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

      {mockContent.map((item, index) => (
        <React.Fragment key={index}>
          <Card style={{ margin: "3rem 2rem" }}>
            <CardContent>
              <FormControl>
                <Typography gutterBottom variant="h6" component="div">
                  {item.headerTitle}
                </Typography>
                {item.questionType === "multi" ? (
                  <>
                    <FormLabel>Select one answer below:</FormLabel>
                    {item.answer.map((answer, index) => (
                      <>
                        <RadioGroup
                          defaultValue="null"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            key={index}
                            value={answer}
                            control={<Radio />}
                            label={answer}
                          />
                        </RadioGroup>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    <FormLabel>Answer here:</FormLabel>
                    <TextField
                      style={{ marginBottom: "2rem" }}
                      component="div"
                      id="standard-basic"
                      value={""}
                      variant="standard"
                    />
                  </>
                )}
              </FormControl>
            </CardContent>
          </Card>
        </React.Fragment>
      ))}
    </>
  );
}
