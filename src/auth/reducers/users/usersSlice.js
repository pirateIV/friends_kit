const { axios } = require('axios');
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const baseUrl = 'http://localhost:5000/api/users';

export const getAllUsers = createAsyncThunk('users/getAllUsers', async (_, thunkAPI) => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const usersReducer = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default usersReducer.reducer;
