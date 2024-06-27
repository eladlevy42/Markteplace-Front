import React, { useEffect, useState } from "react";
import Modal from "../components/Global/Modal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function ProductDetail() {
  const [ProductElment, setProductElment] = useState(<div>Loading</div>);
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  function goBack() {
    nav(-1);
  }

  function deleteItem() {
    try {
      axios.delete(`http://localhost:3000/api/product/${id}`);
      goBack();
    } catch (err) {
      console.log(err);
    }
  }

  async function getProductDetail() {
    const abortController = new AbortController();
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/product/${id}`,
        {
          signal: abortController.signal,
        }
      );

      setProductElment(
        <>
          <div className="mb-4">
            <h1 className=" text-4xl font-semibold">{data.name}</h1>
          </div>
          <div className="flex justify-start">
            <p>
              Price: {data.price} <br />
              Category: {data.category}
              <br />
              Quantity: {data.quantity}
            </p>
          </div>
          <div className="flex justify-end gap-1">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={deleteItem}
            >
              Delete
            </button>
            <button
              onClick={goBack}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Back
            </button>
          </div>
        </>
      );
    } catch (err) {
      console.log(err);
    }
  }
  return <Modal children={ProductElment} />;
}

export default ProductDetail;
