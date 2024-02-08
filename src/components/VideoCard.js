const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { publishedAt, title, channelTitle, thumbnails } = snippet;
  return (
    <div className="flex flex-col items-center justify-center w-[25rem] h-80 rounded-lg">
      <img
        className="object-cover rounded-lg h-[75%] w-[100%] "
        src={thumbnails.high.url}
        alt="thumbnail"
      />
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 className="font-semibold">{title.substring(0, 50)}</h1>
          <h2 className="text-sm text-zinc-500">{channelTitle}</h2>
          <div className="flex gap-6 items-center">
            <p className="text-xs">{statistics.viewCount}</p>
            <p className="text-xs">{publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
