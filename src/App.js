import React from "react";
import Home from "./components/pages/Home";
import Loader from "./utils/Loader";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/action";
import Landing from "./components/pages/Landing";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(10))}>Decrement</button>
      {isLogged && <h3>Sensitive information!!!</h3>} */}
      {/* {isLogged ? <Loader /> : <Home />} */}
      <Landing />
    </div>
  );
}
