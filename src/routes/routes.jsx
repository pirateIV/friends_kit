import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Login from '@/auth/pages/Login/Login';
import Signup from '@/auth/pages/Signup/Signup';

import UserInfo from '@/components/signup/steps/UserInfo';
import ProfileUpload from '@/components/signup/steps/ProfileUpload';
import AccountCreated from '@/components/signup/steps/AccountCreated';
import AuthorizeAccount from '@/components/signup/steps/AuthorizeAccount';

import NotFoundPage from '@/pages/404/NotFound';
// import UserProfile from '@/pages/UserProfile/UserProfile';
import UserProfileMain from '@/pages/UserProfile/UserProfileMain';
import UserProfileMinimal from '@/pages/UserProfileMinimal/UserProfileMinimal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{
      path: '/profile-minimal',
      element: <UserProfileMinimal />,
    },
    {
      path: '/profile-main',
      element: <UserProfileMain />
    }
  ]
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
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/me',
  //   element: <UserProfile />,
  // },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
