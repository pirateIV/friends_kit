const { createSlice } = require('@reduxjs/toolkit');

const authReducer = createSlice({
  name: 'auth',
  initialState: { email: '', password: '' },
  reducers: {
    getUserData(state, action) {
      const { email, password } = action.payload;
    },
  },
});
