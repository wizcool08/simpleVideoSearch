import React from "react";

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="ui loading segment">
        <p />
        <p />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={selectedVideo.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
