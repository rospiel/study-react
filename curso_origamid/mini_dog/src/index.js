import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

function getBodyIndex() {
  return document.getElementById('root');
}

ReactDOM.render(<App />, getBodyIndex());
