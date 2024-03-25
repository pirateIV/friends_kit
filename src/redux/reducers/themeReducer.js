import { createSlice } from '@reduxjs/toolkit';

// localStorage.getItem('theme') || 'light';

const initialState = {
  theme:
    localStorage.getItem('theme') || 'light'
    // window.matchMedia('(prefers-color-scheme: dark)').matches
    //   ? 'dark'
    //   : 'light',
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
