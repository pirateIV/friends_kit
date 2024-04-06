import { createSlice } from '@reduxjs/toolkit';
import { friendsArray } from '.';

const usersFilterSlice = createSlice({
  name: 'usersFilter',
  initialState: friendsArray,
  reducers: {
    setFilteredFriends(state, action) {
      const filtered = state.filter((friend) =>
        friend.name.toLowerCase().includes(action.payload)
      );
      return filtered;
    },
  },
});

export const { setFilteredFriends } = usersFilterSlice.actions;

export default usersFilterSlice.reducer;
