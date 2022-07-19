import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div>
        <iframe
          src={videoSrc}
          width="500"
          height="250"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div>
        <b>{video.snippet.title}</b>
        <p>
          <b>Description: </b>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
