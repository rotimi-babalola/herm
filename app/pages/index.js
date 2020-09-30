import React from "react";
import { Text } from "@chakra-ui/core";

import Layout from "../components/Layout";

function Index() {
  return (
    <Layout>
      <Text
        fontSize="40px"
        color="brand.500"
        as="h1"
        fontFamily="'Nunito', sans-serif"
      >
        Hello, Herm
      </Text>
    </Layout>
  );
}

export default Index;
