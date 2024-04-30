import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectCurrentToken } from '../login/loginSlice';
import axios from 'axios';




const currentUserReducer = createSlice({
  name: 'currentUser',
  initialState: { user: null, isAuthenticated: false },
  reducers: {
   
  },
 
});

