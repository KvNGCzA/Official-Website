import React from "react";
import Routes from "./pages/router";
import { CustomDiv } from "./components";

const App = () => (
  <CustomDiv
    displayAs="flex"
    position="absolute"
    flexDirection="column"
    padding="0px"
    width="100%"
    height="4429px"
    alignItems="flex-start"
    left={0}
    top={0}
  >
    <Routes />
  </CustomDiv>
);

export default App;
