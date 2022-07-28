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

  return <Router></Router>;
}
