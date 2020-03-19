import React from "react";

const Input = ({ value, handleFunction, title }) => {
  return (
    <div id="input">
      <input ref={value} type="text" />
      <button onClick={() => handleFunction(value)}>{title}</button>
    </div>
  );
};

export default Input;
