import React, { createContext, useState, useContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const [homeProducts, setHomeProducts] = useState();
  return (
    <ProductContext.Provider
      value={{ product, setProduct, homeProducts, setHomeProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductValue = () => useContext(ProductContext);
