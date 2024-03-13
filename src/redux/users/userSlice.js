import { createSlice } from '@reduxjs/toolkit';

const user = {
  name: '',
  email: '',
  password: '',
  profilePic: '',
  confirmPassword: '',
  accountType: '',
};

const initialState = {
  status: 'idle',
  users: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateAcctType(state, action) {
      state.users.push({ ...user, accountType: action.payload });
    },
  },
});

export default usersSlice.reducer;
