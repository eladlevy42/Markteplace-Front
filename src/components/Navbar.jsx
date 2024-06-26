import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold">Marketplace</h1>
            </div>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/api/product" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
