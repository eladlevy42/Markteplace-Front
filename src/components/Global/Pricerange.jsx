import React, { useState } from "react";
import ReactSlider from "react-slider";

function PriceRangeSlider({ searchParams, setSearchParams }) {
  let defkey = 1;
  const [values, setValues] = useState([
    parseInt(searchParams.get("min")) || 0,
    parseInt(searchParams.get("max")) || 1000,
  ]);

  return (
    <div className="p-4 m-x-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Price Range:
      </label>
      <ReactSlider
        className="w-full h-4 my-6 relative"
        thumbClassName="w-6 h-6 bg-blue-500 rounded-full cursor-pointer transform translate-y-1"
        trackClassName="h-1 bg-gray-300"
        min={0}
        max={1000}
        step={1}
        value={values}
        onChange={(newValues) => {
          setValues(newValues);
          searchParams.set("min", newValues[0]);
          searchParams.set("max", newValues[1]);
          setSearchParams(searchParams);
        }}
        renderThumb={(props) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={defkey++}
              {...restProps}
              className="w-4 h-4 bg-blue-500 rounded-full cursor-pointer transform -translate-y-1"
            ></div>
          );
        }}
      />
      <div className="mt-2 flex justify-between">
        <span className="block text-sm text-gray-700">Min: ${values[0]}</span>
        <span className="block text-sm text-gray-700">Max: ${values[1]}</span>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
