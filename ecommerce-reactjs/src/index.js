import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// React Router Dom
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { AuthContextProvider } from "./context/AuthContext";

const theme = createMuiTheme({
  palette: {
    //   primary: brown,
    //   secondary: amber,
    type: "light"
  }
});

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
