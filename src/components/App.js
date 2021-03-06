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
import { Links } from './partials/Links';
import { Footer } from './partials/Footer';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const inputFocus = () => {
  $('input').on({
    focus: function() {
      $(this).css({
        background: '#FFF685',
        color: 'royalblue'
      })
    },
    blur: function() {
      $(this).css({
        background: 'honeydew'
      })
    }
  });
};

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTextSubmit('two fists by modern wolf');

    inputFocus();
  }

  onTextSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 8,
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
        <div className="ui grid app-inner">
          <div className="six wide column list-container">
            <Search onFormSubmit={this.onTextSubmit} />
            <List onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          <div className="ten wide column video-links-container">
            <VideoFocus video={this.state.selectedVideo} />
            <Links />
          </div>
        </div>
        <div className="ui grid app-inner-mobile">
          <div className="six wide column list-container-mobile">
            <List onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            <Links />
          </div>
          <div className="ten wide column video-links-container-mobile">
            <VideoFocus video={this.state.selectedVideo} />
            <Search onFormSubmit={this.onTextSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
