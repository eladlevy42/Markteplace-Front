import React, { useRef, useState } from "react";
import Btn from "./Global/Btn";
import PriceRangeSlider from "./Global/Pricerange";
function FilterForm({ handleInputChange, searchParams, setSearchParams }) {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg flex justify-between items-center gap-4 mx-4 my-2">
      <form className="flex flex-wrap gap-4 items-center">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={(ev) => handleInputChange(ev)}
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
            name="category"
            onChange={(ev) => handleInputChange(ev)}
            placeholder="e.g., Electronics"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>{" "}
        <PriceRangeSlider
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <Btn label={`Filter`} />
      </form>
    </div>
  );
}

export default FilterForm;
