import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";

import { signOutUser } from "../../utils/AuthUtils";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const { isLogin, setIsLogin, setUser } = useAuthValue();

  const handleSignOut = e => {
    signOutUser(setIsLogin, setUser);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" color="textPrimary">
              Ecommerce
            </Typography>
          </Link>
          {isLogin ? (
            <Button color="secondary" onClick={handleSignOut}>
              Signout
            </Button>
          ) : (
            <Link to="/auth">
              <Button color="secondary">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
