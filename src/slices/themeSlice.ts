import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../theme';
import { Theme, ThemeType } from '../types';

interface InputExpressionState {
    name: ThemeType
    value: Theme;
}

const initialState: InputExpressionState = {
  value: darkTheme,
  name: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.name = 'dark';

      state.value = darkTheme;
    },
    setLightTheme: (state) => {
      state.name = 'light';

      state.value = lightTheme;
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
