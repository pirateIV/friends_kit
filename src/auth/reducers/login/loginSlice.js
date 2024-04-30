import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  token: localStorage.getItem('token') || null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token } = payload;
      localStorage.setItem('token', token);
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authReducer.actions;

export const selectCurrentToken = (state) => state.auth.token;

export default authReducer.reducer;
