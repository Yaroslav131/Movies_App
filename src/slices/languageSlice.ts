import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LanguagesType } from '@/types';

interface languageState {
    value: LanguagesType;
}

const initialState: languageState = {
  value: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguagesType>) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
