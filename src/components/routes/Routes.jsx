import { Routes as MyRoutes, Route } from "react-router-dom";
import CreateForm from "../pages/CreateForm";
import ResultForm from "../pages/ResultForm";
import AnswerForm from "../pages/AnswerForm";
import Landing from "../pages/Landing";

export default function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/Answer" element={<AnswerForm />} />
      <Route path="/Create" element={<CreateForm />} />
      <Route path="/Result" element={<ResultForm />} />
    </MyRoutes>
  );
}
