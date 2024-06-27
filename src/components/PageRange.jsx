import React from "react";
import Btn from "./Global/Btn";
import { LogIn } from "lucide-react";
function PageRange({ props }) {
  console.log(props);
  let { page, pagination, setSearchParams, searchParams } = props;

  function handlePageChange(dir) {
    if (dir == "left" && page > 1) {
      page--;
      setSearchParams({ ...searchParams, page });
    } else if (dir == "right" && page < pagination.totalPages) {
      page++;
      setSearchParams({ ...searchParams, page });
    }
  }
  function renderPageRange() {
    console.log(pagination);
    let pageRange = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
      pageRange.push(
        <div key={i} className=" w-4 h-4 text-black">
          {i}
        </div>
      );
    }
    return pageRange;
  }

  return (
    <div className=" flex align-center">
      <Btn
        label={"<"}
        onClick={() => handlePageChange("left")}
        type={"button"}
      />
      <div className="flex w-full justify-evenly text-center self-center">
        {renderPageRange()}
      </div>{" "}
      <Btn
        label={">"}
        onClick={() => handlePageChange("right")}
        type={"button"}
      />
    </div>
  );
}

export default PageRange;
