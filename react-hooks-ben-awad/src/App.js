import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import Hello from "./Hello";
import { useMeasure } from "./useMeasure";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, inputRef2] = useMeasure([]);
  return (
    <div>
      <div>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
      </div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button disabled={loading} onClick={() => setCount((c) => c + 1)}>
        increment
      </button>
      <>
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
}

export default App;
