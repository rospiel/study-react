import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './core/globalStyles';
import DefaultLayout from './app/layouts/Default/index';


ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      OIE
    </DefaultLayout>
    
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
