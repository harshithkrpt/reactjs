import React, { useState /* useRef */ } from "react";

import "./App.css";
/* import Counter from "./components/Counter";
import BooleanSwitch from "./components/BooleanSwitch";
import ContextExample from "./hooks/ContextExample";
import CounterUseReducer from "./hooks/CounterUseReducer";
 */
import DanCounter from "./components/DanCounter2";
// Using Ref

function App() {
  const [toggle, setToggle] = useState(true);
  // const inputE1 = useRef(null);

  // const onButtonClick = () => {
  //  // `current` points to the mounted text input element
  //   inputE1.current.focus();
  //   console.log(inputE1.current.value);
  // };

  return (
    <div className="App">
      {/* <input ref={inputE1} /> */}
      {/* <button onClick={onButtonClick}>Focus the input</button> */}
      {/* <Counter />
      <BooleanSwitch />
      <ContextExample />
      <CounterUseReducer /> */}
      {toggle && <DanCounter />}

      <hr />

      <button onClick={() => setToggle((t) => !t)}>Toggle</button>
    </div>
  );
}

export default App;
