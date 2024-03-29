import { createSlice } from '@reduxjs/toolkit';

const user = {
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

const userSlice = createSlice({
  name: 'user',
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
      const passwords = action.payload;
      state.user = { ...state.user, ...passwords };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    setProfileUpload(state, action) {
      const profilePic = action.payload;
      console.log(profilePic);

      state.user = { ...state.user, profilePic };
      localStorage.setItem('user', JSON.stringify(state.user));
      console.log(JSON.parse(JSON.stringify(state.user)));
    },
    deleteUserFromStorage(state, _) {
      localStorage.removeItem('user');
      state.user = null;
    },
  },
  extraReducers(builder) {},
});

export const {
  setAcctType,
  setUserInfo,
  setUserPassword,
  setProfileUpload,
  deleteUserFromStorage,
} = userSlice.actions;
export const getUserInfo = (state) => state.user.user;
// export const getUserPassword = (state) = state.users.

export default userSlice.reducer;
