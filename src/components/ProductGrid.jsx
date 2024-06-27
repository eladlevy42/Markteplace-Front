import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

import { useLocation } from "react-router-dom";

import PageRange from "./PageRange";

function ProductGrid({ handleInputChange, searchParams, setSearchParams }) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 1,
  });
  const name = searchParams.get("name") || "";
  const min = searchParams.get("min") || 0;
  const max = searchParams.get("max") || 1300;
  const page = parseInt(searchParams.get("page")) || 1;
  let category = searchParams.get("category");
  if (category) {
    category = category.split(",");
  } else {
    category = [];
  }
  const location = useLocation();
  useEffect(() => {
    const abortController = new AbortController();
    async function getProducts() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/product` + location.search,
          { signal: abortController.signal }
        );
        setProducts(data);
        const response = await axios.get(
          `http://localhost:3000/api/product/count`
        );
        const count = response.data.count;
        const totalPages = Math.ceil(count / 9);
        setPagination({ totalItems: count, totalPages });
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
    return () => {
      abortController.abort();
    };
  }, [searchParams]);
  if (products.length === 0) {
    return (
      <div className=" w-full h-dvh text-center justify-center self-center">
        NO PRODUCTS
      </div>
    );
  }
  return (
    <div>
      <div className=" w-full h-dvh grid grid-cols-3">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <PageRange props={{ page, pagination, setSearchParams, searchParams }} />
    </div>
  );
}

export default ProductGrid;
