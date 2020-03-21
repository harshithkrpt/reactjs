import React from "react";

import { MenuItem, Menu } from "@material-ui/core";
// import {} from "@material-ui/icons";

const NavOptions = ({
  anchorEl,
  handleMenuClose,
  isMenuOpen,
  handleSignOut
}) => {
  return (
    <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem
        onClick={e => {
          handleSignOut(e);
          handleMenuClose(e);
        }}
      >
        SignOut
      </MenuItem>
    </Menu>
  );
};

export default NavOptions;
