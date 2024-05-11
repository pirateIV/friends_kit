import { createSlice } from "@reduxjs/toolkit";
import { friendsArray } from ".";

const usersFilterSlice = createSlice({
  name: "usersFilter",
  initialState: friendsArray,
  reducers: {
    setFilteredFriends(_, action) {
      return [...action.payload];
    },
  },
});

export const { setFilteredFriends } = usersFilterSlice.actions;

export default usersFilterSlice.reducer;
