import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import Container from "@mui/material/Container";
import Cards from "../cards/Cards";

export default function Home() {
  const counterFromHome = useSelector((state) => state.counter);
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Cards />
    </Container>
  );
}
