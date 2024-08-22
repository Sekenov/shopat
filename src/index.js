import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainPage from '../src/pages/mainPage/MainPage';
import Favorit from './pages/favourite/Favorit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
