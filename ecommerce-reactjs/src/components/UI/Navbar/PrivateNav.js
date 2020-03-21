import React from "react";

import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import NavOptions from "./NavOptions";

const PrivateNav = ({
  handleSignOut,
  handleMenuClose,
  isMenuOpen,
  anchorEl,
  handleProfileMenuOpen
}) => {
  return (
    <>
      <IconButton>
        <Badge color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <IconButton onClick={handleProfileMenuOpen}>
        <AccountCircle />
      </IconButton>
      <NavOptions
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleSignOut={handleSignOut}
      />
    </>
  );
};

export default PrivateNav;
