import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const user = {
  name: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  profilePic: '',
  confirmPassword: '',
  accountType: '',
};

const userFromStorage = JSON.parse(localStorage.getItem('user')) || user;

const initialState = {
  status: 'idle',
  user: userFromStorage,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAcctType(state, action) {
      state.user.accountType = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      console.log(JSON.parse(JSON.stringify(state.user)));
    },
    setUserInfo(state, action) {
      const content = action.payload;
      state.user = { ...state.user, ...content };
      localStorage.setItem('user', JSON.stringify(state.user));
      console.log(JSON.parse(JSON.stringify(state.user)));
    },
    setUserPassword(state, action) {
      return { ...state.user, password: action.payload };
    },
  },
  extraReducers(builder) {},
});

export const { setAcctType, setUserInfo, setUserPassword } = usersSlice.actions;
export const getUserInfo = (state) => state.users.user;

export default usersSlice.reducer;
