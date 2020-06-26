import React from 'react';

const Item = ( {video} ) => {
  return (
    <div>{video.snippet.title}</div>
  )
}

export default Item;
