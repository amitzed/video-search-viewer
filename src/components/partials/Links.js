import React from 'react';

export const Links = () => {
  return (
    <div className="jumbotron jumbotron-fluid links-container"data-aos="fade-down">
      <div className="container">
        <h1 className="display-5" style={{textAlign: 'center'}}>
          <i>Also Check <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>ut</i>
        </h1>
        <div className="links-icon-container">
          <ul className="nav nav-pills nav-justified top-row-buttons">
            <li className="nav-item">
              <a className="nav-link active fa fa-vimeo-square fa-3x" href="https://vimeo.com/" target="_blank"></a>
            </li>
            <li className="nav-item middle-button">
              <a className="nav-link active fa fa-reddit-square fa-3x" href="https://www.reddit.com/r/MusicVideos/" target="_blank"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fa fa-twitch fa-3x" href="https://www.twitch.tv/" target="_blank"></a>
            </li>
          </ul>
          <ul className="nav nav-pills nav-justified bottom-row-buttons">
            <li className="nav-item">
              <a className="nav-link active fa fa-spotify fa-3x" href="https://www.spotify.com/us/" target="_blank"></a>
            </li>
            <li className="nav-item middle-button">
              <a className="nav-link active fa fa-soundcloud fa-3x" href="https://soundcloud.com/discover" target="_blank"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fa fa-bandcamp fa-3x" href="https://bandcamp.com/" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
