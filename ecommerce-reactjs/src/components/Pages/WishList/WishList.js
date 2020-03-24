import React, { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { useWishListValue } from "../../../context/WishListContext";
import {
  removeFromWishList,
  getWishListProducts
} from "../../../utils/WishListUtil";
import WishListItems from "./WishListItems";
import { Link } from "react-router-dom";

const WishList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    wishList,
    setWishList,
    wishListProducts,
    setWishListProducts
  } = useWishListValue();

  useEffect(() => {
    getWishListProducts(wishList, items => {
      setIsLoading(false);
      if (JSON.stringify(items) !== JSON.stringify(wishListProducts)) {
        setWishListProducts([...items]);
      }
    });
  }, [wishList, setWishListProducts, wishListProducts]);

  const handleRemoveFromWishList = product => {
    removeFromWishList(product)
      .then(() => {
        let newWishList = wishList.filter(item => item !== product.id);
        let newWishListProducts = wishListProducts.filter(
          item => item.id !== product.id
        );
        setWishList(newWishList);
        setWishListProducts(newWishListProducts);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress
          style={{
            width: 250,
            height: 250,
            display: "block",
            margin: "10px auto"
          }}
        />
      ) : (
        <>
          <Typography variant="h4">You WishList</Typography>

          {wishListProducts && wishListProducts.length > 0 ? (
            <WishListItems
              products={wishListProducts}
              removeFromWishList={handleRemoveFromWishList}
            />
          ) : (
            <Typography variant="h4">
              No Items In the WishList <Link to="/">Shop</Link>
            </Typography>
          )}
        </>
      )}
    </div>
  );
};

export default WishList;
