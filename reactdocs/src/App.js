import React from "react";
import InputRef from "./components/InputRef";
import OuterClickExample from "./components/OuterClickExample";
import Layer2 from "./context/HelloContext";
import DynamicContext from "./context/DynamicContext";
import Button from "./components/Button";

function App() {
  const ref = React.createRef();
  const handleClick = () => {
    console.log(ref.current);
  };
  return (
    <div className="App">
      <InputRef />
      <OuterClickExample />
      <Layer2 />
      <DynamicContext />
      <Button onClick={handleClick} ref={ref} label="Click">
        Hello
      </Button>
    </div>
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(InputRef, null),
    //   React.createElement(OuterClickExample, null),
    //   React.createElement(Layer2, null),
    //   React.createElement(DynamicContext, null),
    //   React.createElement(
    //     Button,
    //     { onClick: handleClick, ref, label: "Click" },
    //     "Hello"
    //   )
    // )
  );
}

export default App;
