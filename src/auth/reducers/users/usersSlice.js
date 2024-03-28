import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '@/auth/services/users';

const baseUrl = 'http://localhost:5000/api/users';

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  try {
    return await usersService.getAll();
  } catch (error) {
    console.log(error);
  }
});

export const createNewUser = createAsyncThunk(
  'users/createNewUser',
  async (post) => {
    try {
      // // console.log(post)
      // const postcreated = usersService.createUser(post);
      // console.log(postcreated)
      // return usersService.createUser(post);
      const res = await axios.post(baseUrl, post);
      console.log(post)
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
