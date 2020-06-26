import React from 'react';

const Item = ( {video, onVideoSelect} ) => {
  return (
    <div className="item-component row no-gutters" onClick={() => onVideoSelect(video)}>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
        </div>
      </div>
      <div className="col-md-4">
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
    </div>
  )
}

export default Item;
