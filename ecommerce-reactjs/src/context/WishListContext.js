import React, { useState, createContext, useContext } from "react";

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [wishListProducts, setWishListProducts] = useState();
  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, wishListProducts, setWishListProducts }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishListValue = () => useContext(WishListContext);
