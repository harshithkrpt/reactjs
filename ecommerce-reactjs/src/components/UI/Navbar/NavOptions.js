import React from "react";
import { Link } from "react-router-dom";
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
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ textDecoration: "none" }} to="/profile">
          Profile
        </Link>
      </MenuItem>
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
