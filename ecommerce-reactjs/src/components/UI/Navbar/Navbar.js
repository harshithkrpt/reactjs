import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../../context/AuthContext";
import { signOutUser } from "../../../utils/AuthUtils";

// ChildComponents
import PublicNav from "./PublicNav";
import PrivateNav from "./PrivateNav";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 2,
    textDecoration: "none"
  }
}));

const Navbar = props => {
  // Network State
  const { isLogin, setIsLogin, setUser } = useAuthValue();
  const handleSignOut = e => {
    signOutUser(setIsLogin, setUser);
  };

  // UI State
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

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
            <PrivateNav
              handleSignOut={handleSignOut}
              handleMenuClose={handleMenuClose}
              isMenuOpen={isMenuOpen}
              anchorEl={anchorEl}
              handleProfileMenuOpen={handleProfileMenuOpen}
            />
          ) : (
            <PublicNav />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
