import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import Input from "../forms/Input";
import Container from "@mui/material/Container";

export default function Home() {
  const counterFromHome = useSelector((state) => state.counter);
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Input label="Name" />
    </Container>
  );
}
