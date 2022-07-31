import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import CardChild from "./CardChild";
import CardTitle from "./CardTitle";
import CardHeader from "./CardHeader";
import FormTitle from "./FormTitle";
import React, { useState, useEffect } from "react";
import { mockContent } from "../../utils/MockData";

export default function Cards({ data }) {
  const defaultOption = ["Games", "Programming", "Motorcycling", "Biking"];
  const [isRadio, setIsRadio] = useState(false);
  const [title, setTitle] = useState("Untitled form");

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
            <CardContent>
              <FormControl>
                <CardTitle item={item} />
                <CardChild item={item} />
              </FormControl>
            </CardContent>
          </Card>
        </React.Fragment>
      ))}
    </>
  );
}
