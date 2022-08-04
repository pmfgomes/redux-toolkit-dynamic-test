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
    cleanState: () => ({ ...initialState }),
  },
});

export const { increment, decrement, cleanState } = smartCounterSlice.actions;

export const smartCounterReducerName = smartCounterSlice.name;

export default smartCounterSlice.reducer;
