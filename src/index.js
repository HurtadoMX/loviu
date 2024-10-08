import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Flower from './Flower';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/flower" element={<Flower />} />
    </Routes>
  </Router>
);
