import { createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: '',
  reducers: {
    setSearchQuery(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
