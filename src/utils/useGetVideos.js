import { useEffect } from "react";
import { VIDEO_URL } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoList } from "./videoSlice";

const useGetVideos = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.videos.videoList);
  useEffect(() => {
    !videoList && fetchVideo();
  }, []);
  async function fetchVideo() {
    try {
      const res = await fetch(VIDEO_URL);
      const data = await res.json();
      dispatch(addVideoList(data.items));
    } catch (error) {}
  }
};
export default useGetVideos;
