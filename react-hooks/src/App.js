import React, { useRef } from "react";

import "./App.css";
import Counter from "./components/Counter";
import BooleanSwitch from "./components/BooleanSwitch";
import ContextExample from "./hooks/ContextExample";
import CounterUseReducer from "./hooks/CounterUseReducer";

// Using Ref

function App() {
  const inputE1 = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputE1.current.focus();
    console.log(inputE1.current.value);
  };

  return (
    <div className="App">
      <input ref={inputE1} />
      <button onClick={onButtonClick}>Focus the input</button>
      <Counter />
      <BooleanSwitch />
      <ContextExample />
      <CounterUseReducer />
    </div>
  );
}

export default App;
