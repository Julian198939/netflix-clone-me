import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  const videoId = "on_l1bO74j4";

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default YoutubeVideo;
