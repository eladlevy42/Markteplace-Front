import React, { useRef, useState } from "react";
import Btn from "./Global/Btn";
import PriceRangeSlider from "./Global/Pricerange";
function FilterForm({ updateUrl, setSearchQ, searchQ }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);
  const nameRef = useRef("");

  const categoryRef = useRef(""); // Variable names should be consistently cased

  function filterProduct(ev) {
    ev.preventDefault();
    setSearchQ({
      ...searchQ,
      name: nameRef.current.value,
      category: categoryRef.current.value,
      min: min,
      max: max,
    });
    console.log(searchQ);
    updateUrl();
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg flex justify-between items-center gap-4 mx-4 my-2">
      <form
        onSubmit={filterProduct}
        className="flex flex-wrap gap-4 items-center"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            id="name"
            type="text"
            ref={nameRef}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            id="category"
            type="text"
            ref={categoryRef}
            placeholder="e.g., Electronics"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>{" "}
        <PriceRangeSlider setMax={setMax} setMin={setMin} />
        <Btn label={`Filter`}></Btn>
      </form>
    </div>
  );
}

export default FilterForm;
