import React from 'react';

const Item = ( {video, onVideoSelect} ) => {
  return (
    <div className="content item-component" data-aos="fade-up" data-aos-anchor-placement="top-bottom" onClick={() => onVideoSelect(video)}>
      <div className="">
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
        </div>
      </div>
      <hr className="mx-3" />
      <div className="col-md-4">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </div>
    </div>
  )
}

export default Item;
