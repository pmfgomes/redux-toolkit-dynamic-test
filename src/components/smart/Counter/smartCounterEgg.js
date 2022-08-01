import smartCounterReducer from "./smartCounterSlice";

const smartCounterEgg = () => {
  return {
    id: "smartCounterEgg",
    reducersMap: {
      smartCounterReducer,
    },
  };
};

export default smartCounterEgg;