import Navigation from "./Navigation";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import ResultForm from "./ResultForm";
import AnswerForm from "./AnswerForm";
import Landing from "./Landing";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Answer" element={<AnswerForm />} />
        <Route path="/Create" element={<CreateForm />} />
        <Route path="/Result" element={<ResultForm />} />
      </Routes>
    </Container>
  );
}
