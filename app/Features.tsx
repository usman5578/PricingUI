import React from "react";
import { Box, HStack, Icon, Flex, Text } from "@chakra-ui/react";
import icon1 from "./icon/icon1";
import icon2 from "./icon/icon2";
import icon3 from "./icon/icon3";

export default function Features() {
  return (
    <Box maxW={"800px"} m="auto" mt="25px" px='50px' >
      <Flex direction={{base:'column', lg:'row'}}  >
        <HStack mb={'20px'}>
          <Icon as={icon1}></Icon>
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mb={'20px'}>
          <Icon as={icon2}></Icon>
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={'20px'}>
          <Icon as={icon3}></Icon>
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
