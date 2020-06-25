import React from 'react';
import $ from 'jquery';

import '../style.scss';
import youtube from '../apis/youtube.js';
import Search from './Search';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
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
      <div className="container-lg my-2">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4" style={{textAlign: 'center'}}>App Name Placeholder</h1>
          </div>
        </div>
        <i className="fa fa-youtube-play fa-4x">Video Goes Here</i>
        <Search onFormSubmit={this.onTextSubmit} />
      </div>
    );
  }
}

export default App;
