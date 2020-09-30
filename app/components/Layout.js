import React from "react";
import { Box, Flex } from "@chakra-ui/core";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar />
        <Main>{children}</Main>
      </Flex>
    </Box>
  );
}

export default Layout;
