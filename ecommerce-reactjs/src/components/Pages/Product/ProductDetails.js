import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function ProductDetails({ product }) {
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
            style={{ width: "500px", height: "640px" }}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="h3">
            ${product.prize}/-
          </Typography>
          <br />
          <br />
          <br />
          <Button variant="outlined" color="secondary">
            Buy Now
          </Button>
          <br />
          <br />
          <br />
          <Button variant="outlined" color="secondary">
            Add To Cart
          </Button>
          <br />
          <br />
          <br />
          <Button variant="outlined" color="secondary">
            Add To WishList
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
