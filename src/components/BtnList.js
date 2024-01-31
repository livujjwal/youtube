import React from "react";
import { btnList } from "../utils/constants";

const BtnList = () => {
  return (
    <div className="mx-2 my-1 flex flex-wrap items-center overflow-x-scroll w-full scrollbar-none">
      <div className=" flex items-center gap-4  ">
        <button className="bg-black text-white py-[.38rem] px-[.75rem] rounded-lg text-sm font-semibold ">
          All
        </button>
        {btnList.map((title) => (
          <button className="border bg-[#f2f2f2] py-[.38rem] px-[.75rem] rounded-lg text-sm font-semibold hover:bg-[#e6e6e6] duration-500 ease-linear">
            <p>{title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BtnList;
