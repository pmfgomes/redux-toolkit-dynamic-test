import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const smartCounterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = smartCounterSlice.actions;

export default smartCounterSlice.reducer;
