import React, { useEffect } from "react";

import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import NavOptions from "./NavOptions";

// Contect Values
import { useAuthValue } from "../../../context/AuthContext";
import { useCartValue } from "../../../context/CartContext";

import { Link } from "react-router-dom";

const PrivateNav = ({
  handleSignOut,
  handleMenuClose,
  isMenuOpen,
  anchorEl,
  handleProfileMenuOpen
}) => {
  const { user } = useAuthValue();
  const { cart } = useCartValue();

  useEffect(() => {}, [user, cart]);
  return (
    <>
      <IconButton>
        <Link to="/cart">
          <Badge badgeContent={cart && cart.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </Link>
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
