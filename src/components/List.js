import React from 'react';

import Item from './Item';

const List = ( {videos} ) => {
  const renderedList = videos.map( (video) => {
    return <Item video={video} />
  });

  return (
    <div>
      {renderedList}
    </div>
  )
}

export default List;
