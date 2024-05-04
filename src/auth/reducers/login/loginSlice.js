import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:5000/api/users/user';

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  token: localStorage.getItem('token') || null,
};

export const getCurrentUser = createAsyncThunk(
  '/users/getCurrentUser',
  async (_, thunkApi) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token } = payload;
      state.token = token;
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
    selectAuthState: (state) => state.isAuthenticated
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;

export const { setCredentials, logout, setIsAuthenticated } = authReducer.actions;

export default authReducer.reducer;
