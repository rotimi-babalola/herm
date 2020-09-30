import React from "react";
import { Box, Flex, Avatar, Text } from "@chakra-ui/core";

function User({ avatar, sub, username }) {
  return (
    <Flex alignItems="center">
      <Box>
        <Avatar size="sm" name={username} src={avatar} />
      </Box>
      {username && (
        <Box marginLeft="12px">
          <Text fontWeight="bold">{username}</Text>
          {sub && <Text fontSize="12px">{sub}</Text>}
        </Box>
      )}
    </Flex>
  );
}

export default User;
