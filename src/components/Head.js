import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL } from "../utils/constants";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
const Head = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  function handleSidebar() {
    dispatch(toggleSidebar());
  }

  return (
    <div className="flex items-center justify-around py-1 mx-auto ">
      <div className="flex items-center gap-4 w-1/4 ">
        <RxHamburgerMenu
          size={25}
          onClick={handleSidebar}
          className="cursor-pointer"
        />
        <img src={LOGO_URL} alt="logo" className="w-28 bg-transparent " />
      </div>
      <div className="flex items-center justify-around w-[40%] border rounded-3xl">
        <input
          ref={searchText}
          type="text"
          className="pl-3 py-2 w-[90%] rounded-l-3xl "
        />
        <div className="border-l bg-[#f2f2f2] w-[10%] py-2 rounded-r-3xl flex items-center justify-center">
          <button>
            <GoSearch size={22} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end px-8 gap-8 w-1/4">
        <BiVideoPlus size={24} />
        <IoMdNotificationsOutline size={24} />
        <FaRegUserCircle size={24} />
      </div>
    </div>
  );
};

export default Head;
