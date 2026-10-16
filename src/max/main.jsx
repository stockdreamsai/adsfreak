import React from 'react';
import { createRoot } from 'react-dom/client';
import MaxPage from './MaxPage.jsx';
import './max.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MaxPage />
  </React.StrictMode>
);
