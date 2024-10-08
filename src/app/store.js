import { authApi } from "@/app/api/authSlice";
import { postsApi } from "@/features/auth/reducers/posts/postsApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "@/features/auth/reducers/user/userSlice";
import progressReducer from "@/redux/reducers/progressReducer";
import themeReducer from "@/redux/reducers/themeReducer";
import authReducer from "@/features/auth/reducers/login/loginSlice";
import usersFilterReducer from "@/components/profile/friends/userFilterSlice";
import searchQueryReducer from "@/components/profile/friends/searchQuerySlice";
import uploadAreaReducer from "@/components/modals/ui/uploadAreaSlice";
import settingsReducer from "@/redux/reducers/settingsSlice";
import userProfileReducer from "@/features/auth/reducers/user/userProfileSlice";
import chatRoomReducer from "@/features/auth/reducers/chat/chatSlice";
// import currentUserReducer from '@/features/auth/reducers/user/currentUserSlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  theme: themeReducer,
  query: searchQueryReducer,
  progress: progressReducer,
  usersFilter: usersFilterReducer,
  settings: settingsReducer,
  userProfile: userProfileReducer,
  chatRoom: chatRoomReducer,
  // currentUser: currentUserReducer,
  uploadArea: uploadAreaReducer,
  [authApi.reducerPath]: authApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postsApi.middleware),
});

export default store;
