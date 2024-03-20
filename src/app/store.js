import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../auth/reducers/user/userSlice';
import progressReducer from '../redux/reducers/progressReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    progress: progressReducer,
  },
});

export default store;
