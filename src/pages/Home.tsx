import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
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
      <Box display="flex" padding={5} flexDir="column">
        <VStack spacing={5}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </VStack>
      </Box>
      <Box padding={5}>
        <Suggestion />
      </Box>
    </Flex>
  );
};

export default Home;
