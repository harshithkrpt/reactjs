import React from "react";

import { useAuthValue } from "../../context/AuthContext";

export default () => {
  const { user } = useAuthValue();
  console.log(user);
  return <div>Home Page</div>;
};
