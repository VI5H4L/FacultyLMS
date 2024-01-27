import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router,BrowserRouter } from 'react-router-dom';

import MyContextProvider from './Context/contextProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode></MyContextProvider>
);

