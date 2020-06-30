import React from 'react';

const VideoFocus = ( {video}) => {
  if(!video) {
    return (
      <div className="spinner-grow text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="card">
      <div className="card-img-top">
        <iframe src={videoSource} title="Video Player" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoFocus;
