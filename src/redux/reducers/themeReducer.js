import { createSlice } from '@reduxjs/toolkit';

const initialTheme =
  localStorage.getItem('theme') ||
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const initialState = {
  theme: initialTheme,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      const newTheme = action.payload;
      localStorage.setItem('theme', newTheme);
      newTheme === 'light'
        ? document.documentElement.classList.remove('dark')
        : document.documentElement.classList.add('dark');
      return { ...state, theme: action.payload };
    },
  },
});

export const { setTheme } = themeReducer.actions;

export const getTheme = () => (state) => state.theme.theme;

export default themeReducer.reducer;
