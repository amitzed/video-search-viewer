import React from 'react';

const VideoFocus = ( {video}) => {
  if(!video) {
    return (
      <div className="spinner-border text-primary">
        <span className="sr">Loading...</span>
      </div>
    )
  }

  return (
    <div>{video.snippet.title}</div>
  )
}

export default VideoFocus;
