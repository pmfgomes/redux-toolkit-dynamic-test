import { useEffect } from "react";
import store from "../../../stores/store";
import TodoList from "../../lib/TodoList";
import { useSelector, useDispatch } from "react-redux";
import smartTodoListReducer, {
  addToList,
  removeFromList,
  smartTodoListReducerName,
} from "./smartTodoListSlice";

export default function SmartTodoList() {
  const list = useSelector((state) => {
    return state?.todoList?.list;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    store.add(smartTodoListReducerName, smartTodoListReducer);

    return () => {
      store.remove(smartTodoListReducerName);
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
