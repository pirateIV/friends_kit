import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userPostsUrl = "http:localhost:5000/api/posts";

export const getAllUserPosts = createAsyncThunk(
  "/posts/getAllUserPosts",
  async (_, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.id;
      const userToken = thunkApi.getState().auth.token;

      const res = await axios.get(`${userPostsUrl}/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserPosts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts = payload;
      })
      .addCase(getAllUserPosts.rejected, (state, { payload }) => {
        console.error(payload);
        state.err = payload;
      });
  },
});

export default postSlice.reducer;
