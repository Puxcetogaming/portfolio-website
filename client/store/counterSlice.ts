// counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

// We export the reducer as the default export
export default counterSlice.reducer;

// We export the actions for usage in components
export const { increment, decrement } = counterSlice.actions;
