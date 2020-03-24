import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  IconButton,
  Box
} from "@material-ui/core";
import {
  AddShoppingCart,
  FavoriteBorder,
  RemoveShoppingCart,
  Favorite
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 240
  },
  media: {
    height: 390
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "30px"
  },
  title: {
    textAlign: "center"
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 1fr"
  }
});

const PricingCard = ({
  title,
  prize,
  imageLink,
  addToCart,
  cartItems,
  id,
  removeFromCart,
  wishListItems,
  addToWishList,
  removeFromWishList
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.top}>
        {!cartItems.includes(id) ? (
          <IconButton onClick={addToCart}>
            <AddShoppingCart />
          </IconButton>
        ) : (
          <IconButton onClick={removeFromCart}>
            <RemoveShoppingCart />
          </IconButton>
        )}
        <Box></Box>
        {!wishListItems.includes(id) ? (
          <IconButton onClick={addToWishList}>
            <FavoriteBorder />
          </IconButton>
        ) : (
          <IconButton onClick={removeFromWishList}>
            <Favorite />
          </IconButton>
        )}
      </Box>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageLink} title={title} />
        <Typography className={classes.price} variant="body1">
          Price : ${prize.toString(10)}
        </Typography>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default PricingCard;
