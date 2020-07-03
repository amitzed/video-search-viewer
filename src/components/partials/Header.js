import React from 'react';
import $ from 'jquery';

$(() => {

})

export const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid header-container">
      <div className="container">
        <h1 className="display-4" style={{textAlign: 'center'}}>
          <i className="fa fa-youtube-play">App Name Placeholder</i>
        </h1>
      </div>
    </div>
  );
}
