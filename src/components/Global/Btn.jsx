import React from "react";

const ButtonField = ({
  label = "btn",
  onClick,
  type = "submit",
  additionalClasses = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex-1 h-10 self-end px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${additionalClasses}`}
    >
      {label}
    </button>
  );
};

export default ButtonField;
