import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:5000/api/protected';

const token = localStorage.getItem('token') || null;

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  token: token,
};

// console.log(initialState.token);

export const getCurrentUser = createAsyncThunk(
  '/users/getCurrentUser',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(baseUrl, {
        headers: { Authorization: `Bearer ${initialState.token}` },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      localStorage.setItem('token', payload);
      state.token = payload;
    },
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  selectors: {
    selectCurrentToken: (state) => state.token,
    selectCurrentUser: (state) => state.user,
    selectAuthState: (state) => state.isAuthenticated,
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
  //       state.user = payload;
  //     })
  //     .addCase(getCurrentUser.rejected, (state, { payload }) => {
  //       state.error = payload;
  //     });
  // },
});

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;

export const { setCredentials, logout, setIsAuthenticated } = authReducer.actions;

export default authReducer.reducer;
