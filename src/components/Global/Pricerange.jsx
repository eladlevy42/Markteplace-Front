import React, { useState } from "react";
import ReactSlider from "react-slider";

function PriceRangeSlider({ setMin, setMax }) {
  let defkey = 1;
  const [values, setValues] = useState([0, 1000]);

  function updateValues() {
    setMin(values[0]);
    setMax(values[1]);
  }

  return (
    <div className="p-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Price Range:
      </label>
      <ReactSlider
        className="w-full h-4 my-6 relative"
        thumbClassName="w-6 h-6 bg-blue-500 rounded-full cursor-pointer transform translate-y-2"
        trackClassName="h-1 bg-gray-300"
        min={0}
        max={1000}
        step={1}
        value={values}
        onChange={(newValues) => {
          setValues(newValues);
          updateValues();
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
