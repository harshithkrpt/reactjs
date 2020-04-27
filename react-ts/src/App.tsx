import React from "react";
import TextFields from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextFields
        text="Harshith"
        ok
        i={10}
        fn={() => {}}
        person={{ firstName: "aa", lastName: "hos" }}
      />
    </div>
  );
};

export default App;
