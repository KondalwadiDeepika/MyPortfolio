// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS
import './index.css'; // ✅ Your custom styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
