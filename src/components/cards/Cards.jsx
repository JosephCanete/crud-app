import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardChild from "./CardChild";
import Button from "@mui/material/Button";
import CardHeader from "./CardHeader";
import FormTitle from "./FormTitle";
import { mockContent } from "../../utility/MockData";

export default function Cards({ data }) {
  return (
    <>
      <Card style={{ margin: "3rem 2rem" }}>
        <CardContent>
          <FormTitle />
          <CardHeader />
        </CardContent>
      </Card>

      {mockContent.map((item, index) => (
        <React.Fragment key={index}>
          <Card style={{ margin: "3rem 2rem" }}>
            <CardChild item={item} />
          </Card>
        </React.Fragment>
      ))}
      <Button
        variant="contained"
        color="success"
        style={{ marginBottom: "2.5rem" }}
      >
        Submit the form
      </Button>
    </>
  );
}
