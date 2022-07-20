import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import Input from "../forms/Input";

export default function Home() {
  const counterFromHome = useSelector((state) => state.counter);
  return (
    <>
      <h1>Home Component</h1>
      <h4>Let's render counter as well {counterFromHome}</h4>
      <Navigation />
      <Input label="Name" />
    </>
  );
}
