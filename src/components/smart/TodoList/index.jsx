import { useEffect } from "react";
import store from "../../../stores/store";
import TodoList from "../../lib/TodoList";
import { smartTodoListEgg } from "./todoListEgg";
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "./smartTodoListSlice";

export default function SmartTodoList() {
  const list = useSelector((state) => {
    return state?.smartTodoListReducer?.list;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    store.addEggs([smartTodoListEgg()]);

    return () => {
      store.removeEggs([smartTodoListEgg()]);
    };
  }, []);

  return (
    <TodoList
      dataList={list}
      onAdd={(message) => dispatch(addToList(message))}
      onRemove={(messageId) => dispatch(removeFromList(messageId))}
    />
  );
}
