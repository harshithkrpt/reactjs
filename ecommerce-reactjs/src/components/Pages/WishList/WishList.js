import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Button, Paper } from "@material-ui/core";
import { useWishListValue } from "../../../context/WishListContext";
import {
  removeFromWishList,
  getWishListProducts,
  clearWishList
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

  const handleClearWishList = () => {
    clearWishList(() => {
      setWishList([]);
      setWishListProducts([]);
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
          <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
            Your WishList
          </Typography>

          {wishListProducts && wishListProducts.length > 0 ? (
            <Paper
              style={{
                maxWidth: "80%",
                margin: "30px auto",
                position: "relative"
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                style={{ position: "absolute", right: "5%", top: "-80px" }}
                onClick={handleClearWishList}
              >
                Clear WishList
              </Button>
              <br />
              <WishListItems
                products={wishListProducts}
                removeFromWishList={handleRemoveFromWishList}
              />
            </Paper>
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
