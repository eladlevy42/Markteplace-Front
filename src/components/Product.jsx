import React from "react";
import { useNavigate } from "react-router-dom";

function Product(product) {
  product = product.product;
  const nav = useNavigate();

  function openProduct() {
    console.log(product);
    nav(`/api/product/${product._id}`);
  }

  return (
    <div
      className="cursor-pointer p-4 h-48 mt-1 w-full border border-gray-300 rounded-lg shadow-lg hover:bg-gray-50 flex flex-col justify-between"
      onClick={openProduct}
    >
      <h1 className="text-lg font-bold">{product.name}</h1>
      <p className="text-gray-600">{"Price: $" + product.price.toFixed(2)}</p>
    </div>
  );
}

export default Product;
