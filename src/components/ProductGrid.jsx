import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import ArrowBtn from "./ArrowBtn";

function ProductGrid({ url, updateUrl, setSearchQ, searchQ }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await axios.get(url);
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, [url]);
  if (products.length === 0) {
    return (
      <div className=" w-full h-dvh text-center justify-center self-center">
        NO PRODUCTS
      </div>
    );
  }
  return (
    <div className=" flex">
      <ArrowBtn
        dir="left"
        setSearchQ={setSearchQ}
        searchQ={searchQ}
        updateUrl={updateUrl}
      />

      <div className=" w-full h-dvh grid grid-cols-3">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <ArrowBtn
        dir="right"
        page={page}
        updateUrl={updateUrl}
        setSearchQ={setSearchQ}
        searchQ={searchQ}
      />
    </div>
  );
}

export default ProductGrid;
