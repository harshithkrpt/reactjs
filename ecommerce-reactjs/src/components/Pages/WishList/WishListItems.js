import React from "react";
import WishListItem from "./WishListItem";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Paper
} from "@material-ui/core";

const WishListItems = ({ products, removeFromWishList }) => {
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
                <WishListItem
                  product={product}
                  key={product.id}
                  removeFromWishList={() => {
                    removeFromWishList(product);
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

export default WishListItems;
