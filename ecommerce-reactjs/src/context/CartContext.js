import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, cartProducts, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartValue = () => useContext(CartContext);
