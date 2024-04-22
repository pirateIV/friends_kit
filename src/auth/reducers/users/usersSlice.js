// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '@/auth/services/users';

// const baseUrl = 'http://localhost:5000/api/users';

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  try {
    return await usersService.getAll();
  } catch (error) {
    console.log(error);
  }
});

export const createNewUser = createAsyncThunk('users/createNewUser', async (newUser) => {
  try {
    return await usersService.createUser(newUser);
  } catch (error) {
    console.log(error);
  }
});

const usersReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        return [...state, action.payload];
      });
  },
});

export default usersReducer.reducer;
