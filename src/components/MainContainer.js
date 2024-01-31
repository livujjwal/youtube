import React from "react";
import BtnList from "./BtnList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="relative left-64 top-0 flex flex-col w-[82.5%]">
      <BtnList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
