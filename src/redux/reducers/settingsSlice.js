import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  backupEmail: '',
  address: '',
  city: '',
  country: ''
};

const settingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    getUserSettings(state, action) {
      return { ...state, ...action.payload }
    }
  }
});

export const { getUserSettings } = settingsSlice.actions

export default settingsSlice.reducer