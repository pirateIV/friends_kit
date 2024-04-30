import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectCurrentToken } from '../login/loginSlice';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users/user';

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

const currentUserReducer = createSlice({
  name: 'currentUser',
  initialState: { user: null, isAuthenticated: false },
  reducers: {
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { setIsAuthenticated } = currentUserReducer.actions;

export const selectCurrentUser = (state) => state.currentUser.user;

export default currentUserReducer.reducer;
