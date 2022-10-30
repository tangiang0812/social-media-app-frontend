import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Suggestion from "../components/Suggestion";

const Home: React.FC = () => {
  return (
    <Flex
      minHeight="92.5vh"
      justifyContent="center"
      flexDir="row"
      backgroundColor="gray.200"
    >
      <Flex flexDir="column" padding={5} gap={5}>
        <CreatePost />
        <VStack spacing={5}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </VStack>
      </Flex>
      <Box padding={5}>
        <Suggestion />
      </Box>
    </Flex>
  );
};

export default Home;
