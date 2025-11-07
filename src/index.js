import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  console.error('Error details:', event.error?.message);
  console.error('Stack:', event.error?.stack);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();