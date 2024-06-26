import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ProductGrid from "../components/ProductGrid";
import { Outlet } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Navbar from "../components/Navbar";

function ProductListPage() {
  const [url, setUrl] = useState("http://localhost:3000/api/product/");
  const [searchQ, setSearchQ] = useState({
    min: 0,
    max: Infinity,
    name: "",
    category: "",
    page: 0,
  });
  const updateUrl = () => {
    console.log(searchQ);
    setUrl(
      `http://localhost:3000/api/product/?name=${searchQ.name}&category=${searchQ.category}&page=${searchQ.page}&minPrice=${searchQ.min}&maxPrice=${searchQ.max}`
    );
  };
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <CreateProduct url={url} />
          </div>
          <div className="md:col-span-3">
            <FilterForm
              updateUrl={updateUrl}
              setSearchQ={setSearchQ}
              searchQ={searchQ}
            />
          </div>
          <div className="md:col-span-3">
            <ProductGrid
              url={url}
              updateUrl={updateUrl}
              setSearchQ={setSearchQ}
              searchQ={searchQ}
            />
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
}

export default ProductListPage;
