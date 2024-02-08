import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { PiUserSquareLight } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare, AiOutlineShopping } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { TfiVideoClapper } from "react-icons/tfi";
import { youtubeServices1, youtubeServices2 } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const youItems = [
  {
    title: "Your Channel",
    element: <PiUserSquareLight size={24} />,
  },
  {
    title: "History",
    element: <GoHistory size={24} />,
  },
  {
    title: "Your Videos",
    element: <AiOutlinePlaySquare size={24} />,
  },
  {
    title: "Watch Later",
    element: <FaRegClock size={24} />,
  },
  {
    title: "Liked Videos",
    element: <BiLike size={24} />,
  },
  {
    title: "Your Channel",
    element: <PiUserSquareLight size={24} />,
  },
];
const explore = [
  {
    element: <BsFire size={24} />,
    title: "Trending",
  },
  {
    element: <AiOutlineShopping size={24} />,
    title: "Shopping",
  },
  {
    element: <IoMusicalNoteOutline size={24} />,
    title: "Music",
  },
  {
    element: <TfiVideoClapper size={24} />,
    title: "Movies",
  },
  {
    element: <BsFire size={24} />,
    title: "Live",
  },
  {
    element: <BsFire size={24} />,
    title: "Gaming",
  },
  {
    element: <BsFire size={24} />,
    title: "News",
  },
  {
    element: <BsFire size={24} />,
    title: "Sports",
  },
  {
    element: <BsFire size={24} />,
    title: "Learning",
  },
  {
    element: <BsFire size={24} />,
    title: "Fashion & Beauty",
  },
  {
    element: <BsFire size={24} />,
    title: "Podcasts",
  },
];
const moreFronYoutube = [
  {
    element: <BsFire size={24} />,
    title: "Youtube Premium",
  },
  {
    element: <BsFire size={24} />,
    title: "Youtube Studio",
  },
  {
    element: <BsFire size={24} />,
    title: "Youtube Music",
  },
  {
    element: <BsFire size={24} />,
    title: "Youtube Kids",
  },
];
const settingYoutube = [
  {
    element: <BsFire size={24} />,
    title: "Setting",
  },
  {
    element: <BsFire size={24} />,
    title: "Report History",
  },
  {
    element: <BsFire size={24} />,
    title: "Help",
  },
  {
    element: <BsFire size={24} />,
    title: "Send Feedback",
  },
];

const SideBar = () => {
  const showSidebar = useSelector((store) => store.sidebar.showSidebar);
  if (!showSidebar) return "";
  return (
    <div className="hidden md:flex flex-col px-2 py-1 fixed left-0 w-56 hover:w-60  overflow-y-scroll scrollbar-none hover:scrollbar-thin h-screen mb-2 mx-2">
      <div className=" flex flex-col border-b py-2 mb-1">
        <Link to="/">
          {" "}
          <div className="flex items-center gap-4 font-semibold bg-[#f2f2f2] py-1 px-2  rounded-lg my-[0.1rem] hover:bg-[#E6E6E6] duration-500 ease-linear">
            <MdHomeFilled size={28} />
            <p>Home</p>
          </div>
        </Link>
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
          <SiYoutubeshorts size={24} />
          <p>Shorts</p>
        </div>
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
          <MdOutlineSubscriptions size={24} />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className=" flex flex-col border-b py-2 my-1">
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] duration-500 ease-linear">
          <h1 className="font-semibold"> You</h1>
          <SlArrowRight size={12} />
        </div>
        {youItems.map(({ title, element }) => (
          <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm font-medium duration-500 ease-linear">
            {element}
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className=" flex flex-col border-b py-2 my-1">
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] duration-500 ease-linear">
          <h1 className="font-semibold"> Subscriptions</h1>
          {/* <SlArrowRight size={12} /> */}
        </div>
        {youItems.map(({ title, element }) => (
          <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
            {element}
            <p>{title}</p>
          </div>
        ))}
      </div>

      <div className=" flex flex-col border-b py-2 my-1">
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] duration-500 ease-linear">
          <h1 className="font-semibold"> Explore</h1>
          {/* <SlArrowRight size={12} /> */}
        </div>
        {explore.map(({ title, element }) => (
          <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
            {element}
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className=" flex flex-col border-b py-2 my-1">
        <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
          <h1 className="font-semibold"> More From Youtube</h1>
          {/* <SlArrowRight size={12} /> */}
        </div>
        {moreFronYoutube.map(({ title, element }) => (
          <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] text-sm duration-500 ease-linear">
            {element}
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className=" flex flex-col border-b py-2 my-1 text-sm">
        {settingYoutube.map(({ title, element }) => (
          <div className="flex items-center gap-4 py-1 px-2 my-[0.1rem] rounded-lg  hover:bg-[#f2f2f2] duration-500 ease-linear">
            {element}
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="text-neutral-600 my-2 flex items-center flex-wrap py-2 gap-2 text-sm px-2 duration-500 ease-linear">
        {youtubeServices1.map(({ title }) => (
          <p>{title}</p>
        ))}
      </div>
      <div className="text-neutral-600 my-2 flex items-center flex-wrap py-2 gap-2 text-sm px-2 duration-500 ease-linear">
        {youtubeServices2.map(({ title }) => (
          <p>{title}</p>
        ))}
        <p className="font-thin text-neutral-400 mb-8">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default SideBar;
