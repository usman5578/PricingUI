import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      textAlign={{base:'left', md:'left', lg:'center'}}
      px= '20px'
      bg="#6B46C1"
      color={"white"}
      pt="90px"
      pb={"250px"}
    >
      <Heading pb={"10px"}> Simple Pricing for Your business</Heading>
      <Text>Plans that are carefully crafted to suit your business</Text>
    </Box>
  );
}
