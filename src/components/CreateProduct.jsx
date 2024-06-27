import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function CreateProduct({ url }) {
  // Destructuring props for clarity
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const abortController = new AbortController();
        const { data } = await axios.get(url, {
          signal: abortController.signal,
        });
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    getProducts();
  }, [url]); // Adding url to the dependency array to re-fetch when the URL changes

  function makeId() {
    let newId;
    do {
      newId = Math.random().toString(36).substr(2, 9);
    } while (products.some((product) => product._id === newId));
    return newId;
  }

  async function createProduct(ev) {
    ev.preventDefault();
    const newProduct = {
      _id: makeId(),
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      category: categoryRef.current.value,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/product/",
        newProduct
      );
      setProducts((prevProducts) => [...prevProducts, data]);
      nameRef.current.value = "";
      priceRef.current.value = "";
      categoryRef.current.value = "";
    } catch (err) {
      console.error("Failed to create product:", err);
    }
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg flex flex-col gap-5 mx-4 my-2">
      <h3 className="text-xl font-semibold">Create New Product:</h3>
      <form
        onSubmit={createProduct}
        className="flex flex-wrap gap-4 justify-between"
      >
        <div className="flex flex-col flex-1 min-w-0">
          <label
            htmlFor="productName"
            className="text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            ref={nameRef}
            placeholder="Name"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <label
            htmlFor="productPrice"
            className="text-sm font-medium text-gray-700"
          >
            Price ($)
          </label>
          <input
            id="productPrice"
            type="number"
            ref={priceRef}
            placeholder="Price"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <label
            htmlFor="productCategory"
            className="text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="productCategory"
            type="text"
            ref={categoryRef}
            placeholder="Category"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="flex-1 self-end h-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
