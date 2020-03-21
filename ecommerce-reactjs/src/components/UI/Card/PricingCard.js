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
import { AddShoppingCart, FavoriteBorder } from "@material-ui/icons";

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

const PricingCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.top}>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
        <Box></Box>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
      </Box>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://rukminim1.flixcart.com/image/660/792/juzuavk0/t-shirt/h/g/a/l-cnc51804-cool-n-comfort-original-imaffvaebvqcutth.jpeg?q=50"
          title="card title"
        />
        <Typography className={classes.price} variant="body1">
          Price : $100
        </Typography>
        <Typography variant="subtitle2" className={classes.title}>
          Title
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default PricingCard;
