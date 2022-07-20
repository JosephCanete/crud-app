import React from "react";
import Home from "./components/pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/action";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {isLogged && <h3>Sensitive information!!!</h3>}
      <Home />
    </div>
  );
}
