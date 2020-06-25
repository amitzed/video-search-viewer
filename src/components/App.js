import React from 'react';
import $ from 'jquery';

import '../style.scss';
import youtube from '../apis/youtube.js';
import Search from './Search';
import List from './List';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    $('input').on({
      focus: function() {
        $(this).css({
          background: 'whitesmoke',
          color: 'royalblue'
        })
      },
      blur: function() {
        $(this).css({
          background: 'honeydew'
        })
      }
    });
  }

  onTextSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 50,
        key: KEY
      }
    });
    this.setState({videos: response.data.items});
  }

  render() {
    return (
      <div className="container-lg my-2">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4" style={{textAlign: 'center'}}>App Name Placeholder</h1>
          </div>
        </div>
        <i className="fa fa-youtube-play fa-4x">Video Goes Here</i>
        <Search onFormSubmit={this.onTextSubmit} />
        <List videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
