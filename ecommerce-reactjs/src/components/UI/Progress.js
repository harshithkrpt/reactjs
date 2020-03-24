import React from "react";
import { CircularProgress } from "@material-ui/core";

const Progress = props => {
  return (
    <CircularProgress
      style={{
        width: 250,
        height: 250,
        display: "block",
        margin: "10px auto"
      }}
    />
  );
};

export default Progress;
