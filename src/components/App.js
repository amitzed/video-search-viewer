import React from 'react';
import $ from 'jquery';
/* Styles */
import '../styles/main.scss';
/* Pages */
import youtube from '../apis/youtube.js';
import Search from './Search';
import List from './List';
import VideoFocus from './VideoFocus';
/* Partials */
import { Header } from './partials/Header';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTextSubmit('two fists by modern wolf');

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
        maxResults: 7,
        type: 'video',
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="container-lg my-2 app-container">
        <Header />
        <div className="ui grid">
          <div className="six wide column list-container">
            <List onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          <div className="ten wide column">
            <Search onFormSubmit={this.onTextSubmit} />
            <VideoFocus video={this.state.selectedVideo} className="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
