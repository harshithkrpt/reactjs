import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper } from "@material-ui/core";

// Components
import Progress from "../../UI/Progress";
import ProductDetails from "./ProductDetails";

// Context Value
import { useProductValue } from "../../../context/ProductContext";
import { getProduct } from "../../../utils/ProductUtils";
import { addToCart, removeFromCart } from "../../../utils/CartUtil";
import { addToWishList, removeFromWishList } from "../../../utils/WishListUtil";
import { useCartValue } from "../../../context/CartContext";
import { useWishListValue } from "../../../context/WishListContext";

const Product = props => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { product, setProduct } = useProductValue();

  useEffect(() => {
    getProduct(id, doc => {
      setIsLoading(false);
      setProduct(doc);
    });
  }, [setProduct, id, setIsLoading]);

  const { cart, setCart } = useCartValue();
  const { wishList, setWishList } = useWishListValue();
  const handleAddToCart = product => {
    addToCart(product)
      .then(() => {
        setCart([...cart, product.id]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleAddToWishList = product => {
    addToWishList(product)
      .then(() => {
        setWishList([...wishList, product.id]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRemoveFromCart = product => {
    removeFromCart(product)
      .then(() => {
        let newCart = cart.filter(item => item !== product.id);
        setCart(newCart);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRemoveFromWishList = product => {
    removeFromWishList(product)
      .then(() => {
        let newWishList = wishList.filter(item => item !== product.id);
        setWishList(newWishList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Paper style={{ maxWidth: "80%", margin: "10px auto" }}>
      {isLoading ? (
        <Progress />
      ) : (
        product && (
          <ProductDetails
            product={product}
            addToCart={() => handleAddToCart(product)}
            removeFromCart={() => handleRemoveFromCart(product)}
            addToWishList={() => handleAddToWishList(product)}
            removeFromWishList={() => handleRemoveFromWishList(product)}
            cart={cart}
            wishList={wishList}
            id={id}
          />
        )
      )}
    </Paper>
  );
};

export default Product;
