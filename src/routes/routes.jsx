import { createBrowserRouter } from "react-router-dom";

import Login from "../features/auth/pages/Login/Login";
import Signup from "../features/auth/pages/Signup/Signup";

import UserInfo from "../components/signup/steps/UserInfo";
import ProfileUpload from "../components/signup/steps/ProfileUpload";
import AccountCreated from "../components/signup/steps/AccountCreated";
import AuthorizeAccount from "../components/signup/steps/AuthorizeAccount";

import Chat from "@/pages/Chat/Chat";
import Jobs from "@/pages/About/routes/Jobs";
import NotFoundPage from "@/pages/404/NotFound";
import AboutUser from "@/pages/About/AboutUser";
import Friends from "@/pages/ProfileFriends/Friends";
import Education from "@/pages/About/routes/Education";
import PersonalInfo from "@/pages/About/routes/PersonalInfo";
import UserProfileMain from "@/pages/user_profile/UserProfileMain";
import UserProfileMinimal from "@/pages/user_profile/UserProfileMinimal";

import ProtectedRoute from "@/utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/timeline",
        element: <UserProfileMinimal />,
      },
      {
        path: "/@me",
        element: <UserProfileMain />,
      },
      {
        path: "/@me/friends",
        element: <Friends />,
      },
      {
        path: "/@me/about",
        element: <AboutUser />,
        children: [
          {
            path: "/@me/about/personalInfo",
            element: <PersonalInfo />,
          },
          {
            path: "/@me/about/education",
            element: <Education />,
          },
          {
            path: "/@me/about/jobs",
            element: <Jobs />,
          },
        ],
      },
      {
        path: "/@me/chat",
        element: <Chat />,
        children: [
          {
            path: "/@me/chat/:userId",
            element: <Chat />,
          },
        ],
      },
      {
        path: "/user/:userId",
        element: <UserProfileMain />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "/signup/info",
        element: <UserInfo />,
      },
      {
        path: "/signup/upload-profile",
        element: <ProfileUpload />,
      },
      {
        path: "/signup/auth",
        element: <AuthorizeAccount />,
      },
      {
        path: "/signup/created",
        element: <AccountCreated />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
