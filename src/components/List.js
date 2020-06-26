import React from 'react';

import Item from './Item';

const List = ( {videos} ) => {
  const renderedList = videos.map( (video) => {
    return <Item />
  });

  return (
    <div>
      {renderedList}
    </div>
  )
}

export default List;
