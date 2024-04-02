import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

// export const signInUser = createAsyncThunk('auth/signInUser', async (userDetails) => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/login', userDetails);
//     console.log('log in successful');
//     const token = res.data.token;
//     console.log(token);
//     // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

const authReducer = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authReducer.actions;

export default authReducer.reducer;

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token