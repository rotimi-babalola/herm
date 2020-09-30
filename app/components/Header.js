import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/core";
import User from "./User";

function Header() {
  return (
    <Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
      <Flex alignItems="center" justifyContent="space-between" height="50px">
        <Box bg="gray.200" rounded="full">
          <Icon
            name="logo"
            color="brand.500"
            width="40px"
            height="40px"
            viewBox="0 0 40 40"
          />
        </Box>
        <User
          username="Christian Nwamba"
          // sub="Scheduled for 16th December at 09:30 AM"
        />
      </Flex>
    </Box>
  );
}

export default Header;
