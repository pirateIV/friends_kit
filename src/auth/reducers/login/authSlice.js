import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signInUser = createAsyncThunk('auth/signInUser', async (userDetails) => {
  try {
    const res = await axios.post('http://localhost:5000/api/login', userDetails);
    console.log('log in successful');
    const token = req.data.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await res.data;
  } catch (error) {
    console.log(error);
  }
});

const authReducer = createSlice({
  name: 'auth',
  initialState: { email: '', password: '' },
  reducers: {
    // authorizeUser(state, action) {
    //   return action.payload;
    // },
  },
});

export default authReducer.reducer;
