import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const CartItem = ({ product, removeFromCart }) => {
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
        <IconButton onClick={removeFromCart}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
