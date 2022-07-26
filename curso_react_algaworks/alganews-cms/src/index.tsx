import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './core/globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './app/views/Home.view';
import EditorList from './app/views/EditorReport.view';
import PostCreate from './app/views/PostCreate.view';
import NotFound404 from './app/views/NotFound404.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>     
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/editores'} exact component={EditorList} />
        <Route path={'/posts/criar'} exact component={PostCreate} />
        <Route component={NotFound404} />
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
