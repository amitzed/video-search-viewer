import React from 'react';

import youtube from '../apis/youtube.js';
import Search from './Search';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  onTextSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 50,
        key: KEY
      }
    });
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.onTextSubmit} />
      </div>
    );
  }
}

export default App;
