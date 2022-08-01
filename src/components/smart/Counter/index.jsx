import { useEffect } from "react";
import Counter from "../../lib/Counter";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./smartCounterSlice";
import store from "../../../stores/store";
import smartCounterEgg from "./smartCounterEgg";

export default function SmartCounter() {
  const count = useSelector((state) => {
    return state?.smartCounterReducer?.counter;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    store.addEggs([smartCounterEgg()]);

    return () => {
      store.removeEggs([smartCounterEgg()]);
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
