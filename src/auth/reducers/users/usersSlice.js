import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '@/auth/services/users';

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  try {
    return await usersService.getAll();
  } catch (error) {
    console.log(err.message);
  }
});

const usersReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default usersReducer.reducer;
