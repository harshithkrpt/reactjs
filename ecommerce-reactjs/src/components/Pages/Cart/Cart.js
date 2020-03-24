import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useCartValue } from "../../../context/CartContext";
import { removeFromCart, getCartProducts } from "../../../utils/CartUtil";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const Cart = props => {
  const { cart, cartProducts, setCartProducts, setCart } = useCartValue();

  useEffect(() => {
    getCartProducts(cart, setCartProducts);
  }, [cart, setCartProducts]);

  const handleRemoveFromCart = product => {
    removeFromCart(product)
      .then(() => {
        let newCart = cart.filter(item => item !== product.id);
        let newCartProducts = cartProducts.filter(
          item => item.id !== product.id
        );
        setCart(newCart);
        setCartProducts(newCartProducts);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Typography variant="h4">You Cart</Typography>
      <>
        {cartProducts.length > 0 ? (
          <CartItems
            products={cartProducts}
            removeFromCart={handleRemoveFromCart}
          />
        ) : (
          <Typography variant="h4">
            No Items In the Cart <Link to="/">Shop</Link>
          </Typography>
        )}
      </>
    </div>
  );
};

export default Cart;
