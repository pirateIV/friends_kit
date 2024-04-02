import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/auth/reducers/user/userSlice';
import progressReducer from '@/redux/reducers/progressReducer';
import themeReducer from '@/redux/reducers/themeReducer';
import usersReducer from '@/auth/reducers/users/usersSlice';
import authReducer from '@/auth/reducers/login/loginSlice';
import { authApi } from '@/app/api/apiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    progress: progressReducer,
    theme: themeReducer,
    users: usersReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
