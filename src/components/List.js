import React from 'react';

import Item from './Item';

const List = ( {videos, onVideoSelect} ) => {
  const renderedList = videos.map( (video) => {
    return <Item onVideoSelect={onVideoSelect} video={video} />
  });

  return (
    <div className="item-component-container card mb-3">
      {renderedList}
    </div>
  )
}

export default List;
