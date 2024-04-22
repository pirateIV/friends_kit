import Root from './root';
import { createBrowserRouter } from 'react-router-dom';

// auth
import Login from '@/auth/pages/Login/Login';
import Signup from '@/auth/pages/Signup/Signup';

// signup
import UserInfo from '@/components/signup/steps/UserInfo';
import ProfileUpload from '@/components/signup/steps/ProfileUpload';
import AccountCreated from '@/components/signup/steps/AccountCreated';
import AuthorizeAccount from '@/components/signup/steps/AuthorizeAccount';

// user
import Friends from '@/pages/friends/Friends';
import UserProfileMain from '@/pages/user_profile/UserProfileMain';
import UserProfileMinimal from '@/pages/user_profile/UserProfileMinimal';

// about
import AboutUser from '@/pages/About/AboutUser';
import Jobs from '@/pages/About/routes/Jobs';
import Education from '@/pages/About/routes/Education';
import PersonalInfo from '@/pages/About/routes/PersonalInfo';

// 404
import NotFoundPage from '@/pages/404/NotFound';

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
      },
      {
        path: '@me/friends',
        element: <Friends />,
      },
      {
        path: '@me/about',
        element: <AboutUser />,
        children: [
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
