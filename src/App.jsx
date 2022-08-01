import { useState } from "react";
import SmartCounter from "./components/smart/Counter";
import SmartTodoList from "./components/smart/TodoList";
import { Tabs, Tab } from "@mui/material";
import styled from "@emotion/styled";
import TabPanel from "./components/lib/TabPanel";

const AppContainer = styled.div`
  padding: 8px;
`;

function App() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <AppContainer>
      <Tabs value={tabValue} onChange={(event, tabIndex) => setTabValue(tabIndex)}>
        <Tab label="Counter" />
        <Tab label="Todo List" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <SmartCounter />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <SmartTodoList />
      </TabPanel>
    </AppContainer>
  );
}

export default App;
