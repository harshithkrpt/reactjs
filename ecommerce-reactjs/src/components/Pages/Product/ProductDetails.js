import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function ProductDetails({
  product,
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
  id,
  wishList,
  cart
}) {
  return (
    <div>
      <Typography align="center" variant="h4">
        {product.title}
      </Typography>
      <br />
      <br />
      <br />
      <Grid container>
        <Grid item xs={6}>
          <img
            src={product.imageLink}
            style={{ width: "500px", height: "640px", margin: "0 auto" }}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="h3">
            ${product.prize}/-
          </Typography>

          <Grid container alignContent="center" alignItems="center">
            <Grid item xs={6}>
              {cart.includes(id) ? (
                <Button
                  onClick={removeFromCart}
                  variant="outlined"
                  color="secondary"
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  onClick={addToCart}
                  variant="outlined"
                  color="secondary"
                >
                  Add To Cart
                </Button>
              )}
            </Grid>
            <Grid item xs={6}>
              {wishList.includes(id) ? (
                <Button
                  onClick={removeFromWishList}
                  variant="outlined"
                  color="secondary"
                >
                  Remove From WishList
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={addToWishList}
                  color="secondary"
                >
                  Add To WishList
                </Button>
              )}
            </Grid>
          </Grid>
          <br />
          <Grid container alignContent="center" alignItems="center">
            <Grid item xs={8}>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
                color="secondary"
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
