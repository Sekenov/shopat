import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainPage from '../src/pages/mainPage/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage /> 
    <App />
  </React.StrictMode>
);
