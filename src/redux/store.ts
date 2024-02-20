
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from "./reducers/reducer";

const store = configureStore({
  reducer: todoReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>