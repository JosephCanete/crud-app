import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navigation() {
  const [navigation, setNavigation] = useState("");

  const handleRoutes = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };

  return (
    <Router>
      <BottomNavigation
        showLabels
        value={navigation}
        onChange={(event, newValue) => {
          setNavigation(newValue);
        }}
      >
        <BottomNavigationAction
          id="home"
          color="secondary"
          label="Home"
          icon={<HomeIcon />}
          onClick={(event) => handleRoutes(event)}
        />
        <BottomNavigationAction
          id="createForm"
          color="secondary"
          label="Create Form"
          icon={<CreateIcon />}
          to="create"
          onClick={(event) => handleRoutes(event)}
        />
        <BottomNavigationAction
          id="answerForm"
          color="secondary"
          label="Answer Form"
          icon={<QuestionAnswerIcon />}
          onClick={(event) => handleRoutes(event)}
        />
        <BottomNavigationAction
          id="viewResult"
          color="secondary"
          label="View Result"
          icon={<ReviewsIcon />}
          onClick={(event) => handleRoutes(event)}
        />
      </BottomNavigation>
    </Router>
  );
}
