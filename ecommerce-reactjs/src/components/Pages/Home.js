import React, { useEffect, useState } from "react";
import db from "../../config/db";
import PricingCard from "../../components/UI/Card/PricingCard";
import { Grid } from "@material-ui/core";

const Home = props => {
  const [products, setProducts] = useState([]);

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
  return (
    <div style={{ marginTop: 40 }}>
      <Grid container spacing={5}>
        {products.map(product => {
          return (
            <PricingCard
              key={product.id}
              title={product.title}
              prize={product.prize}
              imageLink={product.imageLink}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
