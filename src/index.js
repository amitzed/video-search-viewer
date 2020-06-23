import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
