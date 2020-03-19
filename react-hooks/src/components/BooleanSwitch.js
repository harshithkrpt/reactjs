import React, { useState } from "react";

const BooleanSwitch = props => {
  const [object, setObject] = useState({ name: true, email: true });

  return (
    <>
      <div
        onClick={() => {
          setObject({ name: !object.name, email: object.email });
        }}
      >
        name : {object.name ? "true" : "false"}
      </div>
      <div
        onClick={() => {
          setObject({ email: !object.email, name: object.name });
        }}
      >
        email : {object.email ? "true" : "false"}
      </div>
    </>
  );
};

export default BooleanSwitch;
