import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import store from './app/store.js';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes/routes.jsx';
import { ThemeProvider } from '@material-tailwind/react';

import './index.css';

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
