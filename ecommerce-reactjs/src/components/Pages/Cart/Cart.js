import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useCartValue } from "../../../context/CartContext";
import { removeFromCart } from "../../../utils/CartUtil";
import PricingCard from "../../UI/Card/PricingCard";
import db from "../../../config/db";

const Cart = props => {
  const { cart } = useCartValue();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let cartProducts = [];
      await cart.forEach(async item => {
        await db
          .collection("product")
          .doc(item)
          .get()
          .then(doc => {
            if (doc.exists) {
              let obj = {};
              let data = doc.data();
              obj.id = doc.id;
              obj.imageLink = data.imageLink;
              obj.title = data.title;
              obj.prize = data.prize;
              cartProducts.push(obj);
            } else {
              throw Error("Doc Not Found");
            }
          })
          .catch(err => {
            console.log(err);
          });
        console.log(cartProducts);
        setCartProducts([...cartProducts]);
      });
    };
    fetchData();
  }, [cart]);

  return (
    <div>
      <Typography variant="h4">You Cart</Typography>
      {console.log(cartProducts)}
      <>
        {cartProducts.map(product => {
          console.log(product);
          return (
            <PricingCard
              id={product.id}
              key={product.id}
              title={product.title}
              prize={product.prize}
              imageLink={product.imageLink}
              addToCart={() => {}}
              removeFromCart={() => {
                removeFromCart(product);
              }}
              cartItems={cart || []}
            />
          );
        })}
      </>
    </div>
  );
};

export default Cart;
