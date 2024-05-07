import { authApi } from '@/app/api/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from '@/features/auth/reducers/user/userSlice';
import progressReducer from '@/redux/reducers/progressReducer';
import themeReducer from '@/redux/reducers/themeReducer';
import authReducer from '@/features/auth/reducers/login/loginSlice';
import usersFilterReducer from '@/components/profile/friends/userFilterSlice';
import searchQueryReducer from '@/components/profile/friends/searchQuerySlice';
import uploadAreaReducer from '@/components/modals/ui/uploadAreaSlice';
// import currentUserReducer from '@/features/auth/reducers/user/currentUserSlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  theme: themeReducer,
  query: searchQueryReducer,
  progress: progressReducer,
  usersFilter: usersFilterReducer,
  // currentUser: currentUserReducer,
  uploadArea: uploadAreaReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
