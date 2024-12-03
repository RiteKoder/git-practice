import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  console.log("app fun is called", Math.random());
  if (counter < 0) {
    counter = 0;
  }
  function addCounter() {
    setCounter(counter + 1);
    console.log("add fun is called");
  }
  function subCounter() {
    setCounter(counter - 1);
    console.log("sub fun is called");
  }
  return (
    <>
      <h1>Let's start counting</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={subCounter}>Decrease Counter</button>
      <br />
      {counter}
    </>
  );
}

export default App;
