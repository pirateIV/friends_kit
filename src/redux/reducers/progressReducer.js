import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgress(state, action) {
      state.value = Number(action.payload);
    },
  },
});

export const currentProgress = ({ progress }) => progress.value;

export const { setProgress } = progressSlice.actions;
export default progressSlice.reducer;
