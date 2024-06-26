import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/api/product", { replace: true });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <button
        onClick={goBack}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}

export default Page404;
