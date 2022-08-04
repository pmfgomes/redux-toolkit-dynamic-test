import { useEffect } from "react";
import Counter from "../../lib/Counter";
import { useSelector, useDispatch } from "react-redux";
import smartCounterReducer, {
  smartCounterReducerName,
  decrement,
  increment,
} from "./smartCounterSlice";
import store from "../../../stores/store";

export default function SmartCounter() {
  const count = useSelector((state) => {
    return state?.counterSlice?.counter;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    store.add(smartCounterReducerName, smartCounterReducer);
    return () => {
      store.remove(smartCounterReducerName);
    };
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Counter
        value={count}
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
      />
    </div>
  );
}
