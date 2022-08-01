import styled from "@emotion/styled";
import { Stack, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { memo } from "react";

const TodoListItem = styled(Paper)`
  display: flex;
  border-radius: 4px;
  padding: 16px;
`;

const CustomIconButton = styled(IconButton)`
  padding: 0;
`;

const TodoListItemValueContainer = styled.div`
  display: inherit;
  flex: auto;
  justify-content: start;
  align-items: center;
`;

const TodoListItemButtonContainer = styled.div`
  display: inherit;
  flex: 0 0 24px;
  justify-content: end;
  align-items: center;
`;

function List(props) {
  const { data, onRemove, itemContainerWidth = "100%" } = props;
  return (
    <>
      {data && (
        <Stack spacing={2} direction="column" width={itemContainerWidth}>
          {data.map((listItem) => {
            return (
              <TodoListItem key={`list-item-${listItem.id}`}>
                <TodoListItemValueContainer>{listItem.value}</TodoListItemValueContainer>
                <TodoListItemButtonContainer>
                  <CustomIconButton
                    size="large"
                    disableRipple
                    onClick={() => onRemove(listItem.id)}
                  >
                    <DeleteIcon />
                  </CustomIconButton>
                </TodoListItemButtonContainer>
              </TodoListItem>
            );
          })}
        </Stack>
      )}
    </>
  );
}

export default memo(List);
