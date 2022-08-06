import Navigation from "./Navigation";
import Container from "@mui/material/Container";
import Routes from "../routes/Routes";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Routes />
    </Container>
  );
}
