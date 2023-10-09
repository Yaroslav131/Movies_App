import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../slices/languageSlice';
import themeReducer from '../slices/themeSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
