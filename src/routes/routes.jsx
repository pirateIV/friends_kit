import Root from './root';
import { createBrowserRouter } from 'react-router-dom';

// auth
import Login from '@/features/auth/pages/Login/Login';
import Signup from '@/features/auth/pages/Signup/Signup';

// signup
import UserInfo from '@/components/signup/steps/UserInfo';
import ProfileUpload from '@/components/signup/steps/ProfileUpload';
import AccountCreated from '@/components/signup/steps/AccountCreated';
import AuthorizeAccount from '@/components/signup/steps/AuthorizeAccount';

// user
import Friends from '@/pages/friends/Friends';
import Settings from '@/pages/settings/Settings';
import UserProfileMain from '@/pages/user_profile/UserProfileMain';
import UserProfileMinimal from '@/pages/user_profile/UserProfileMinimal';

// about
import Jobs from '@/pages/About/routes/Jobs';
import AboutUser from '@/pages/About/AboutUser';
import Education from '@/pages/About/routes/Education';
import PersonalInfo from '@/pages/About/routes/PersonalInfo';

// 404
import NotFoundPage from '@/pages/404/NotFound';
import ProtectedRoute from '@/utils/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/app',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/app/timeline',
            element: <UserProfileMinimal />,
          },
          {
            path: '/app/@me',
            element: <UserProfileMain />,
          },
          {
            path: '/app/@me/friends',
            element: <Friends />,
          },
          {
            path: '/app/@me/about',
            element: <AboutUser />,
            children: [
              {
                path: '/app/@me/about/personalInfo',
                element: <PersonalInfo />,
              },
              {
                path: '/app/@me/about/education',
                element: <Education />,
              },
              {
                path: '/app/@me/about/jobs',
                element: <Jobs />,
              },
            ],
          },
          {
            path: '/app/@me/settings',
            element: <Settings />,
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
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
