import React from "react";
import Product from "./Product";

function ProductGrid(ProductArr) {
  return ProductArr.forEach((product) => {
    return (
      <Product
        key={product._id}
        product={product}
        className=" border-2 border-black border-solid"
      />
    );
  });
}

export default ProductGrid;
