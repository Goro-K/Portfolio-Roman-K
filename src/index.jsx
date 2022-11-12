import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/header/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="mx-auto">
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
