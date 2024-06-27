import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ProductGrid from "../components/ProductGrid";
import { Outlet, useSearchParams } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Navbar from "../components/Navbar";

function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleInputChange(ev) {
    {
      searchParams.set(ev.target.name, ev.target.value);
      setSearchParams(searchParams);
    }
  }
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">{/* <CreateProduct ur /> */}</div>
          <div className="md:col-span-3">
            <FilterForm
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-3">
            <ProductGrid
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
}

export default ProductListPage;
