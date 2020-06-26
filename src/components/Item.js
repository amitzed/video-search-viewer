import React from 'react';

const Item = ( {video} ) => {
  return (
    <div>
      {video.snippet.title}
      <img src={video.snippet.thumbnails.medium.url} />
    </div>
  )
}

export default Item;
