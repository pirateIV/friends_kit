import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme:
    localStorage.getItem('theme') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme === 'dark'
        ? (localStorage.setItem('theme', 'dark'),
          document.documentElement.classList.add('dark'))
        : (localStorage.setItem('theme', 'light'),
          document.documentElement.classList.remove('dark'));
      return { ...state, theme: action.payload };
    },
  },
});
export const { setTheme } = themeReducer.actions;

export default themeReducer.reducer;
