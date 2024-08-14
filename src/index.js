import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FontSizeProvider } from './screens/FontSizeContext'; // Adjust import path

ReactDOM.render(
  <FontSizeProvider>
    <App />
  </FontSizeProvider>,
  document.getElementById('root')
);
