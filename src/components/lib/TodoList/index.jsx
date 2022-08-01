import { TextField, Stack, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import List from "./List";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export default function TodoList(props) {
  const { dataList = [] || undefined, onAdd = undefined, onRemove = undefined } = props;

  const [message, setMessage] = useState("");
  const [stackWidth, setStackWidth] = useState(0);

  const addItemStackRef = useRef(null);

  useEffect(() => {
    if (addItemStackRef.current) {
      setStackWidth(addItemStackRef.current.clientWidth);
    }
  }, [addItemStackRef]);

  const handleOnAdd = () => {
    if (onAdd) {
      onAdd(message);
      setMessage("");
    }
  };

  return (
    <TodoListContainer>
      <Stack spacing={2} direction="row" ref={addItemStackRef}>
        <TextField
          placeholder="Add new todo item"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="small"
          style={{
            width: "500px",
          }}
        />
        <Button variant="contained" onClick={handleOnAdd}>
          Add
        </Button>
      </Stack>
      <List data={dataList} onRemove={onRemove} itemContainerWidth={stackWidth} />
    </TodoListContainer>
  );
}
