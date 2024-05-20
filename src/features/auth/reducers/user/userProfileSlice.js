import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:5000/api/users";

// Define the async thunk with a userId parameter
const getUserProfileInfo = createAsyncThunk(
  "/users/getUserProfileInfo",
  async (userId, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    const res = await axios.get(`${baseUrl}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
);

const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileInfo.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getUserProfileInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = "idle";
        state.data = action.payload;
      })
      .addCase(getUserProfileInfo.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const selectCurrentUserProfile = (state) => state.userProfile.data;

export default userProfileSlice.reducer;
export { getUserProfileInfo };
