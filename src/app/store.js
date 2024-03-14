import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../auth/reducers/users/userSlice';
import progressReducer from '../redux/reducers/progressReducer';


const store = configureStore({
  reducer: {
    users: usersReducer,
    progress: progressReducer
  },
});


export default store;
