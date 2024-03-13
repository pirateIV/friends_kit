import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './tailwind.css';
import Root from './routes/root.jsx';
import Signup from './pages/signup/Signup.jsx';
import NotFound from './pages/404/NotFound.jsx';
import SelectAccount from './components/signup/steps/SelectAccount.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup/select-account',
    element: <SelectAccount />
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
