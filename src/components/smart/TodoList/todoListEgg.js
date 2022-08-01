import smartTodoListReducer from "./smartTodoListSlice";

export const smartTodoListEgg = () => {
  return {
    id: "smartTodoListReducer",
    reducersMap: {
      smartTodoListReducer,
    },
  };
};
