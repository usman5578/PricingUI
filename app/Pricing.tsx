import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import CheckMarkIcon from "./icon/CheckMarkIcon";

export default function Pricing() {
  return (
    <Box
      maxW={"950px"}
     ml={{base:'20px', lg:'auto'}}
     mr={{base:'20px', lg:'auto'}}
      mt={"-200px"}
      borderRadius="12px"
      overflow={"hidden"}
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex  direction={{ base:'column', md:'column', lg:'row'}}>
        {/* Left Box */}
        <Box bg="#d2c8e5" p="40px" textAlign={"center"}>
          <Text fontSize={"34px"} fontWeight={"bold"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt="20px" w="300px" color={"white"} bg="#6B46C1">
            Get Started
          </Button>
        </Box>
        {/* Right Box */}
        <Box pt={"50px"} pl="25px" bg={"white"} p="40px">
          <Text mb={"10px"}>
            Acess these features when you get this pricing package for your
            Business
          </Text>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>International Calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>IAutomated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={CheckMarkIcon}></Icon>
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
