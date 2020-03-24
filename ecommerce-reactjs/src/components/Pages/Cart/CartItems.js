import React from "react";
import CartItem from "./CartItem";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Paper
} from "@material-ui/core";

const CartItems = ({ products, removeFromCart }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => {
              return (
                <CartItem
                  product={product}
                  key={product.id}
                  removeFromCart={() => {
                    removeFromCart(product);
                  }}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartItems;
