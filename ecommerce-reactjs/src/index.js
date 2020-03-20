import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { amber, brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: amber,
    type: "dark"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
