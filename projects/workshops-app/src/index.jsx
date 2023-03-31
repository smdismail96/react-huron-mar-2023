import React from 'react';
import ReactDOM from 'react-dom/client';

// Webpack allows us to import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';

import Application, { x, y } from './components/App';

console.log(x, y);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);