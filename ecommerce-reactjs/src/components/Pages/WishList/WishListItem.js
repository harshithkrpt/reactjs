import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const WishListItem = ({ product, removeFromWishList }) => {
  return (
    <TableRow>
      <TableCell align="center">
        <img
          src={product.imageLink}
          alt={product.title}
          style={{ height: 60, width: 60 }}
        />
      </TableCell>
      <TableCell align="center">{product.title}</TableCell>
      <TableCell align="center">${product.prize}/-</TableCell>
      <TableCell align="center">
        <IconButton onClick={removeFromWishList}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default WishListItem;
