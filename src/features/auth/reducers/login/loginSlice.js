import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "@/api/client";

const baseUrl = `${baseURL}/protected`;

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
};

export const getCurrentUser = createAsyncThunk(
  "/users/getCurrentUser",
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      const response = await axios.get(baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.token = payload;
    },
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  selectors: {
    selectCurrentToken: (state) => state.token,
    selectCurrentUser: (state) => state.user,
    selectAuthState: (state) => state.isAuthenticated,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuthenticated = true;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        console.error(payload);
        state.error = payload;
      });
  },
});

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;

export const { setCredentials, logout, setIsAuthenticated } =
  authReducer.actions;

export default authReducer.reducer;
