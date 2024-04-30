import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users/user';

import { createSlice } from '@reduxjs/toolkit';

const currentUserReducer = createSlice({
  name: 'currentUser',
  initialState: null,
  reducers: {
    async getCurrentUser(state, action) {
      const token = localStorage.getItem('token');
      const res = await axios.get(baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  },
});

export const { getCurrentUser } = currentUserReducer.actions;

export default currentUserReducer.reducer;
