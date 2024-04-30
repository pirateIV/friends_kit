import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// const authenticateUser = createAsyncThunk('users/authenticateUser', async () => {
//   await axios
//     .get(baseUrl, {
//       headers: { Authorization: `Bearer ${initialState.token}` },
//     })
//     .then((res) => {
//       initialState.isAuthenticated = true;
//       console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// });

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token } = payload;
      // state.user = user;
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      // state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    authenticateUser: (state, action) => {},
  },
});

export const { setCredentials, logout } = authReducer.actions;

// export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

export default authReducer.reducer;
