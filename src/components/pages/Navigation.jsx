import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ReviewsIcon from "@mui/icons-material/Reviews";

export default function Navigation() {
  const [navigation, setNavigation] = useState("");

  return (
    <BrowserRouter>
      <BottomNavigation
        showLabels
        value={navigation}
        onChange={(event, newValue) => {
          setNavigation(newValue);
        }}
      >
        <BottomNavigationAction
          color="secondary"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          color="secondary"
          label="Create Form"
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          color="secondary"
          label="Answer Form"
          icon={<QuestionAnswerIcon />}
        />
        <BottomNavigationAction
          color="secondary"
          label="View Result"
          icon={<ReviewsIcon />}
        />
      </BottomNavigation>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}
