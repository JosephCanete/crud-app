import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<Home />}>
          {/* <BottomNavigationAction
              id="home"
              color="secondary"
              label="Home"
              icon={<HomeIcon />}
            /> */}
          Home
        </Route>
        <Route exact path="create-form" element={<CreateForm />}>
          {/* <BottomNavigationAction
              id="createForm"
              color="secondary"
              label="Create Form"
              icon={<CreateIcon />}
            /> */}
          Create Form
        </Route>

        <Route exact path="answer-form" element={<AnswerForm />}>
          {/* <BottomNavigationAction
              id="answerForm"
              color="secondary"
              label="Answer Form"
              icon={<QuestionAnswerIcon />}
            /> */}
          Answer Form
        </Route>

        <Route exact path="view-result" element={<ResultForm />}>
          {/* <BottomNavigationAction
              id="viewResult"
              color="secondary"
              label="View Result"
              icon={<ReviewsIcon />}
            /> */}
          View Result
        </Route>
      </Routes>
    </Router>
  );
}
