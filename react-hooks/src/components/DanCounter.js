import React, { useState, useEffect, useRef } from "react";

const DanCounter = () => {
  const [count, setCount] = useState(0);

  //   Using a Reference
  const latestCount = useRef(0);

  const handleAlert = (e) => {
    setTimeout(() => {
      alert("You Clicked On: " + count);
    }, 3000);
  };

  useEffect(() => {
    // console.log("Mount");
    // document.title = `You Clicked ${count} times`;
    // return () => {
    //   console.log("Unmount");
    // };
  });

  //   useEffect(() => {
  //     latestCount.current = count;
  //     setTimeout(() => {
  //       console.log(`You Clicked ${latestCount.current} times`);
  //     }, 3000);
  //   });

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>You Clicked {count} Times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={handleAlert}>Alert Me</button>
    </div>
  );
};

export default DanCounter;
