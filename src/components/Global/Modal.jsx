import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ children, onClose, title }) => {
  const nav = useNavigate();
  function goBack() {
    nav("/product/");
  }
  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
      onClick={goBack}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
