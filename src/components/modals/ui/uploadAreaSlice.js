import { createSlice } from "@reduxjs/toolkit";

const uploadAreaReducer = createSlice({
  name: "uploadArea",
  initialState: false,
  reducers: {
    showUploadArea() {
      return true;
    },
    exitUploadArea() {
      return false;
    },
  },
});

export const { showUploadArea, exitUploadArea } = uploadAreaReducer.actions;
export default uploadAreaReducer.reducer;
