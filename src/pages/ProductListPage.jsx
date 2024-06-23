import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await axios.get("http://localhost:3000/api/product/");
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);
  return (
    <div>
      <ProductGrid products={products} className=" grid grid-cols-3" />
    </div>
  );
}

export default ProductListPage;
