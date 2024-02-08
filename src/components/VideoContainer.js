import { Link } from "react-router-dom";
import useGetVideos from "../utils/useGetVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videoList = useSelector((store) => store.videos.videoList);
  useGetVideos();
  if (!videoList) return "";
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center flex-wrap justify-around gap-4 ">
        {videoList.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
