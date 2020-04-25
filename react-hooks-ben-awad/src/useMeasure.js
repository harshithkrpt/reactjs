import { useState, useRef, useLayoutEffect } from "react";

const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [rect, myRef];
};

export default useMeasure;
