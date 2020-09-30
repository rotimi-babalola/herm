import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";

function NavItem({ Icon, href = "#", children }) {
  const [mouseOver, setMouseOver] = React.useState(false);

  return (
    <a display="block" href={href}>
      <Flex
        alignItems="center"
        height="45px"
        bg={mouseOver && "rgba(224, 0, 152, 0.1)"}
        cursor={mouseOver ? "pointer" : "default"}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        rounded="md"
        pt="10px"
        pb="10px"
        pl="20px"
        pr="20px"
      >
        <Box marginRight="10px">
          <Icon fill={mouseOver ? "#E00098" : "#364067"} />
        </Box>
        <Text color={mouseOver ? "#E00098" : "#364067"}>{children}</Text>
      </Flex>
    </a>
  );
}

export default NavItem;
