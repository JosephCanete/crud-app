import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import CreateForm from "./CreateForm";
import AnswerForm from "./AnswerForm";
import ResultForm from "./ResultForm";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ReviewsIcon from "@mui/icons-material/Reviews";

export default function Navigation() {
  const [navigation, setNavigation] = useState("");

  return (
    <Router>
      <BottomNavigation value={navigation}>
        <Link to="/">
          <BottomNavigationAction
            id="home"
            color="secondary"
            label="Home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/create-form">
          <BottomNavigationAction
            id="createForm"
            color="secondary"
            label="Create Form"
            icon={<CreateIcon />}
          />
        </Link>

        <Link to="/answer-form">
          <BottomNavigationAction
            id="answerForm"
            color="secondary"
            label="Answer Form"
            icon={<QuestionAnswerIcon />}
          />
        </Link>

        <Link to="/view-result">
          <BottomNavigationAction
            id="viewResult"
            color="secondary"
            label="View Result"
            icon={<ReviewsIcon />}
          />
        </Link>
      </BottomNavigation>

      {/* <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create-form">
          <CreateForm />
        </Route>
        <Route path="/answer-form">
          <AnswerForm />
        </Route>
        <Route path="/view-result">
          <ResultForm />
        </Route>
      </Routes> */}
    </Router>
  );
}
