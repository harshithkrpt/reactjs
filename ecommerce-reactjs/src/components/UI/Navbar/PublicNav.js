import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const PublicNav = props => {
  return (
    <Link to="/auth">
      <Button color="secondary">Login</Button>
    </Link>
  );
};

export default PublicNav;
