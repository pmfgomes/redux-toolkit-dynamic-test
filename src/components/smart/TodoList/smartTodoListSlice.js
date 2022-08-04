import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  list: [],
};

const smartTodoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.unshift({
        id: uuidv4(),
        value: action.payload,
      });
    },
    removeFromList: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload);
      state.list.splice(index, 1);
    },
  },
});

export const { addToList, removeFromList } = smartTodoList.actions;
export const smartTodoListReducerName = smartTodoList.name;

export default smartTodoList.reducer;
