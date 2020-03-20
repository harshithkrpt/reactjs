import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.title}
          >
            Ecommerce
          </Typography>
          <Button color="default">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
