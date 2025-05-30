import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ← добавили
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>        {/* ← оборачиваем App в BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

