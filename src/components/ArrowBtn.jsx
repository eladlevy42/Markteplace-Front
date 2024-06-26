import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function ArrowBtn({ dir, updateUrl, setSearchQ, searchQ }) {
  const [pagesTotal, setPagesTotal] = useState(1);
  const [visibility, setVisibility] = useState("self-center hidden");
  const page = searchQ.page;
  useEffect(() => {
    async function getPages() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/product/count/"
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
      setSearchQ({ ...searchQ, page: page - 1 });
      updateUrl();
      console.log(searchQ);
    } else if (dir === "right" && page < pagesTotal - 1) {
      setSearchQ({ ...searchQ, page: page + 1 });
      updateUrl();
    }
  }

  if (dir == "right")
    return <FaLongArrowAltRight onClick={changePage} className={visibility} />;
  else {
    return <FaLongArrowAltLeft onClick={changePage} className={visibility} />;
  }
}

export default ArrowBtn;
