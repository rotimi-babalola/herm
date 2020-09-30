import React from "react";
import { Box } from "@chakra-ui/core";
import { FaRegClock, FaRegListAlt, FaRegUser } from "react-icons/fa";

import NavItem from "./NavItem";

function Sidebar() {
  return (
    <Box
      bg="#fafafb"
      height="100vh"
      width="270px"
      pt="40px"
      pl="30px"
      pr="30px"
    >
      <NavItem Icon={FaRegListAlt}>Feeds</NavItem>
      <NavItem Icon={FaRegClock}>Schedule</NavItem>
      <NavItem Icon={FaRegUser}>Account</NavItem>
    </Box>
  );
}

export default Sidebar;
