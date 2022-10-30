import { Avatar, Box, Button, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Post from "../components/Post";

const Profile = () => {
  return (
    <Flex
      minHeight="92.5vh"
      justifyContent="center"
      flexDir="column"
      backgroundColor="gray.200"
    >
      <Box boxShadow="lg">
        <Box
          height="40vh"
          backgroundImage="https://images.unsplash.com/photo-1666930329254-47fd6b6a1de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80"
          backgroundPosition="center"
        ></Box>
        <Box backgroundColor="white" paddingY={3} paddingX="300px">
          <Flex>
            <Avatar size="2xl" position="relative" marginTop="-96px"></Avatar>
            <Text marginX={3} fontSize="2xl" as="b">Giang</Text>
            <Spacer/>
            <Button marginX={3} colorScheme="twitter">Follow</Button>
          </Flex>
        </Box>
      </Box>
      <Box display="flex" padding={5} flexDir="column">
        <VStack spacing={5}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </VStack>
      </Box>
    </Flex>
  );
};

export default Profile;
