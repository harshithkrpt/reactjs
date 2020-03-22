import React, { useEffect } from "react";

import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import NavOptions from "./NavOptions";
import { useAuthValue } from "../../../context/AuthContext";

const PrivateNav = ({
  handleSignOut,
  handleMenuClose,
  isMenuOpen,
  anchorEl,
  handleProfileMenuOpen
}) => {
  const { user } = useAuthValue();
  useEffect(() => {}, [user]);
  return (
    <>
      <IconButton>
        <Badge color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <IconButton onClick={handleProfileMenuOpen}>
        {user !== undefined && user.photoURL ? (
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src={user.photoURL}
            alt=""
          />
        ) : (
          <AccountCircle />
        )}
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
