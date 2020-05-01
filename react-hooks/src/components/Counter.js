import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = `You Clicked ${count} time`;
  });

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
};

export default Counter;
