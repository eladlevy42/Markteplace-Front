import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function ArrowBtn({ dir, handleInputChange }) {
  const [pagesTotal, setPagesTotal] = useState(1);
  const [visibility, setVisibility] = useState("self-center hidden");
  const page = searchParams.get("page");
  useEffect(() => {
    async function getPages() {
      const abortConroller = new AbortController();
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/product/count/",
          { signal: abortConroller.signal }
        );
        setPagesTotal(Math.ceil(data.count / 9));
      } catch (err) {
        console.log(err);
      }
    }
    getPages();
    if (
      (dir === "left" && page === 0) ||
      (dir === "right" && page === pagesTotal - 1)
    ) {
      setVisibility("self-center hidden");
    } else {
      setVisibility("self-center visible");
    }
  }, [page, pagesTotal]);

  function changePage() {
    if (dir === "left" && page > 0) {
      console.log(searchQ);
    } else if (dir === "right" && page < pagesTotal - 1) {
    }
  }

  if (dir == "right")
    return <FaLongArrowAltRight onClick={changePage} className={visibility} />;
  else {
    return <FaLongArrowAltLeft onClick={changePage} className={visibility} />;
  }
}

export default ArrowBtn;
