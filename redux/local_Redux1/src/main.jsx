import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { myOwnStore } from './App/store.js';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={myOwnStore}>
    <App />
  </Provider>
);
