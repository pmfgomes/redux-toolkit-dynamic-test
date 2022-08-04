import { createSlice } from "@reduxjs/toolkit";
import { buildStore } from "../dynamicReducer";

const defaultReducer = createSlice({
  name: "defaultReducer",
  initialState: "",
});

export const store = buildStore({
  devTools: true,
  reducer: {
    default: defaultReducer.reducer,
  },
});

export default store;
