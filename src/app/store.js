import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/auth/reducers/user/userSlice';
import progressReducer from '@/redux/reducers/progressReducer';
import themeReducer from '@/redux/reducers/themeReducer';
import usersReducer from '@/auth/reducers/users/usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    progress: progressReducer,
    theme: themeReducer,
    users: usersReducer
  },
});

export default store;
