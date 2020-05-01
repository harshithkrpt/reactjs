import React, { useEffect, useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  const { count, step } = state;
  switch (action.type) {
    case "tick":
      return { step, count: count + step };
    case "stepInc":
      return { count, step: step + 1 };
    default:
      throw new Error("Wrong Type " + action.type);
  }
};

const DanCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;
  useEffect(() => {
    console.log("I Called Once");
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      console.clear();
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div>
      <p>You Clicked {count} Times</p>
      <button onClick={() => dispatch({ type: "stepInc" })}>
        Increment Step to {step + 1}
      </button>
    </div>
  );
};

export default DanCounter;
