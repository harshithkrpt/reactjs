import React, { useState, useRef } from "react";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Typography,
  Button
} from "@material-ui/core";

import "./Auth.css";

// UTILS
import {
  signInUser,
  signUpUser,
  userAuthStateChange
} from "../../utils/AuthUtils";

// CONTEXT
import { useAuthValue } from "../../context/AuthContext";

const Auth = props => {
  const [haveAccount, setHaveAccount] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  //   Custom Hook
  const { setIsLogin, setUser } = useAuthValue();

  //   Toggle from Sign Up And Login
  const handleHaveAccount = e => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setHaveAccount(!haveAccount);
  };

  const handleLoginAndSignUp = e => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // TODO EMAIL AND PASSWORD VALIDATIONS
    if (email !== "" && password !== "") {
      if (haveAccount) {
        signInUser(email, password);
      } else {
        signUpUser(email, password);
      }
      userAuthStateChange(setIsLogin, setUser);
    }
  };

  return (
    <>
      <div id="auth">
        <div className="title">
          <Typography variant="h6" color="textPrimary">
            {haveAccount ? "Login" : "Sign Up"}
          </Typography>
        </div>
        <div id="elems">
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor="email">Email </InputLabel>
            <Input
              inputRef={emailRef}
              id="emailid"
              aria-describedby="emailid-helper-text"
            />
            <FormHelperText id="emailid-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor="password">Password </InputLabel>
            <Input
              inputRef={passwordRef}
              type="password"
              id="passwordid"
              aria-describedby="password-helper-text"
            />
            <FormHelperText id="password-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <Typography variant="caption">
            {" "}
            {haveAccount ? "Don't Have Account ?" : "Already Have Account"}{" "}
          </Typography>
          <Button
            onClick={handleHaveAccount}
            variant="outlined"
            style={{ fontSize: "0.5rem" }}
          >
            {haveAccount ? "Sign Up" : "Login"}
          </Button>
          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            onClick={handleLoginAndSignUp}
            variant="contained"
          >
            {haveAccount ? "Login" : "Sign Up"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Auth;
