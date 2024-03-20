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
  user,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAcctType(state, action) {
      state.user.accountType = action.payload;
      console.log(JSON.parse(JSON.stringify(state.user)));
    },
    setUserInfo(state, action) {
      const content = action.payload;
      state.user = { ...state.user, ...content };
      console.log(JSON.parse(JSON.stringify(state.user)));
    },
    setUserPassword(state, action) {
      return { ...state.user, password: action.payload };
    },
  },
});

export const { setAcctType, setUserInfo, setUserPassword } = usersSlice.actions;

export default usersSlice.reducer;
