import React, { createContext, Component } from "react";

// CREATE A CONTEXT
const ValueContext = createContext(/* DEFAULT STATE */);
ValueContext.displayName = "ThisISDisplayNameInDevTools";
// PROVIDING THE CONTEXT
const ContextExample = (props) => {
  return (
    <ValueContext.Provider value="This is a Context Value">
      <Layer1 />
    </ValueContext.Provider>
  );
};

// 5 CHILD COMPONENTS
const Layer1 = (props) => {
  return <Layer2 />;
};

const Layer2 = (props) => {
  return <Layer3 />;
};

const Layer3 = (props) => {
  return <Layer4 />;
};

const Layer4 = (props) => {
  return <Layer5 />;
};

const Layer5 = (props) => {
  return <Layer6 />;
};

// CONSUMING THE CONTEXT
class Layer6 extends Component {
  //   static contextType = ValueContext;
  render() {
    return (
      <div>
        {this.context}
        -------
        <Layer7 />
      </div>
    );
  }
}

// Contect.Consumer
const Layer7 = () => {
  return <ValueContext.Consumer>{(value) => value}</ValueContext.Consumer>;
};

Layer6.contextType = ValueContext;

export default ContextExample;
