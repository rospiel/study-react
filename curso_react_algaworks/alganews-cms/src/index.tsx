import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './core/globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './app/views/Contact.view';
import Home from './app/views/Home.view';
import DefaultLayout from './app/layouts/Default/index';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>     
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/contato'} exact component={Contact} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
