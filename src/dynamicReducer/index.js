import { combineReducers, configureStore } from "@reduxjs/toolkit";

export function buildStore({
  reducer = {},
  devTools = false,
  enhancers,
  middleware,
  preloadedState,
}) {
  const store = configureStore({
    reducer,
    devTools,
    enhancers,
    middleware,
    preloadedState,
  });

  let combinedReducer = combineReducers(reducer);

  const add = (key, dynamicReducer) => {
    if (!key || reducer[key]) {
      return;
    }

    reducer[key] = dynamicReducer;
    combinedReducer = combineReducers(reducer);
    store.replaceReducer(combinedReducer);
  };

  const remove = (key) => {
    if (!key || !reducer[key]) {
      return;
    }

    delete reducer[key];
    combinedReducer = combineReducers(reducer);
    store.replaceReducer(combinedReducer);
  };

  return Object.assign(store, {
    add,
    remove,
    getReducerMap: () => reducer,
  });
}
