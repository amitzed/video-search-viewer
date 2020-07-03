import React from 'react';

export const Footer = () => {
  return (
    <div className="jumbotron jumbotron-fluid footer-container"data-aos="fade-down">
      <div className="container">
        <h1 className="display-4" style={{textAlign: 'center'}}>
          <i className="fa fa-plane">&nbsp;Also Check Out</i>
        </h1>
        <ul className="nav nav-pills nav-justified top-row-buttons">
          <li className="nav-item">
            <a className="nav-link active fa fa-youtube-square fa-3x" href="#" target="_blank"></a>
          </li>
          <li className="nav-item middle-button">
            <a className="nav-link active fa fa-vimeo-square fa-3x" href="#" target="_blank"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active fa fa-twitch fa-3x" href="#" target="_blank"></a>
          </li>
        </ul>
        <ul className="nav nav-pills nav-justified bottom-row-buttons">
          <li className="nav-item">
            <a className="nav-link active fa fa-spotify fa-3x" href="#" target="_blank"></a>
          </li>
          <li className="nav-item middle-button">
            <a className="nav-link active fa fa-soundcloud fa-3x" href="#" target="_blank"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active fa fa-bandcamp fa-3x" href="#" target="_blank"></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
