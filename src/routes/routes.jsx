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
import UserProfileMinimal from '@/pages/UserProfile/UserProfileMinimal';
import Friends from '@/pages/Friends/Friends';

// About
import AboutUser from '@/pages/About/AboutUser';
import Jobs from '@/pages/About/routes/Jobs';
import Overview from '@/pages/About/routes/Overview';
import Education from '@/pages/About/routes/Education';
import PersonalInfo from '@/pages/About/routes/PersonalInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/timeline',
        element: <UserProfileMinimal />,
      },
      {
        path: '@me',
        element: <UserProfileMain />,
        children: [
          {
            path: '@me/about',
            element: <AboutUser />,
            children: [
              // {
              //   path: '@me/about/overview',
              //   element: <Overview />,
              // },
              {
                path: '@me/about/personalInfo',
                element: <PersonalInfo />,
              },
              {
                path: '@me/about/education',
                element: <Education />,
              },
              {
                path: '@me/about/jobs',
                element: <Jobs />,
              },
            ],
          },
          {
            path: '@me/friends',
            element: <Friends />,
          },
        ],
      },
    ],
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
