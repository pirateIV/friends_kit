import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './app/store.js';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './tailwind.css';
import Root from './routes/root.jsx';
import NotFound from './pages/404/NotFound.jsx';
import Signup from './auth/pages/signup/Signup.jsx';
import ProfileUpload from './components/signup/steps/ProfileUpload.jsx';
import AuthorizeAccount from './components/signup/steps/AuthorizeAccount.jsx';
import AccountCreated from './components/signup/steps/AccountCreated.jsx';

import UserInfo from './components/signup/steps/UserInfo.jsx';
import { ThemeProvider } from '@material-tailwind/react';

console.log(store.getState());

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      {
        path: '/signup/info',
        element: <UserInfo />,
      },
      {
        path: '/signup/upload-profile',
        element: <ProfileUpload />,
      },
      {
        path: '/signup/auth',
        element: <AuthorizeAccount />,
      },
      {
        path: '/signup/created',
        element: <AccountCreated />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
