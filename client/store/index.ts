// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // default import from above

export const store = configureStore({
  reducer: {
    // "counter" is the key,
    // "counterReducer" is the actual reducer function from counterSlice
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
