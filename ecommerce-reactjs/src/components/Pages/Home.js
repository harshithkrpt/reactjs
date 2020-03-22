import React, { useEffect, useState } from "react";
import db from "../../config/db";
import PricingCard from "../../components/UI/Card/PricingCard";
import { Grid } from "@material-ui/core";
import { addToCart, getCartItems, removeFromCart } from "../../utils/CartUtil";
import { useCartValue } from "../../context/CartContext";

const Home = props => {
  const [products, setProducts] = useState([]);
  // Getting The Products
  useEffect(() => {
    const newProducts = [];
    db.collection("product")
      .limit(20)
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          newProducts.push({ id: doc.id, ...doc.data() });
        });
        if (JSON.stringify(products) !== JSON.stringify(newProducts)) {
          setProducts(newProducts);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [products]);

  const { cart, setCart } = useCartValue();
  // GetCart Items
  useEffect(() => {
    getCartItems()
      .then(snapshot => {
        if (snapshot.size !== 0) {
          let newCart;
          snapshot.forEach(doc => {
            newCart = doc.data().products;
          });
          if (JSON.stringify(newCart) !== JSON.stringify(cart)) {
            setCart([...newCart]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [cart, setCart]);

  const handleAddToCart = product => {
    addToCart(product)
      .then(() => {
        setCart([...cart, product.id]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRemoveFromCart = product => {
    removeFromCart(product)
      .then(() => {
        let newCart = cart.filter(item => item !== product.id);
        setCart(newCart);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: 40 }}>
      <Grid container spacing={5}>
        {products.map(product => {
          return (
            <PricingCard
              id={product.id}
              key={product.id}
              title={product.title}
              prize={product.prize}
              imageLink={product.imageLink}
              addToCart={() => {
                handleAddToCart(product);
              }}
              removeFromCart={() => {
                handleRemoveFromCart(product);
              }}
              cartItems={cart || []}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
