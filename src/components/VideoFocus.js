import React from 'react';

const VideoFocus = ( {video}) => {
  if(!video) {
    return (
      <div className="spinner-grow text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="card">
      <img src="https://tbivision.com/files/2020/05/TikTok.png" className="card-img-top" alt="An Image" />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoFocus;
