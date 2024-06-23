import React from "react";

function Product(product) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{"price: " + product.price}</p>
      <p>{"category: " + product.category}</p>
    </div>
  );
}

export default Product;
