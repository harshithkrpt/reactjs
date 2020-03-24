import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper } from "@material-ui/core";

// Components
import Progress from "../../UI/Progress";
import ProductDetails from "./ProductDetails";

// Context Value
import { useProductValue } from "../../../context/ProductContext";

import { getProduct } from "../../../utils/ProductUtils";

const Product = props => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { product, setProduct } = useProductValue();

  useEffect(() => {
    getProduct(id, doc => {
      setIsLoading(false);
      setProduct(doc);
    });
  }, [setProduct, id, setIsLoading]);

  return (
    <Paper style={{ maxWidth: "80%", margin: "10px auto" }}>
      {isLoading ? (
        <Progress />
      ) : (
        product && <ProductDetails product={product} />
      )}
    </Paper>
  );
};

export default Product;
