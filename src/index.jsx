import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/home/index';
import Competence from './pages/competence/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competence />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
