import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
