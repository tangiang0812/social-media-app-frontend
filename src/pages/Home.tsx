import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Post from "../components/Post";

const Home: React.FC = () => {
  return (
    <Box
      paddingY={5}
      justifyContent="space-around"
      height="92.5vh"
      maxWidth="100%"
      display="flex"
      flexDir="row"
    >
      <Box width="70%" display="flex" flexDir="column">
        <VStack spacing={5}>
          <Post />
          <Post />
        </VStack>
      </Box>
      <Box width="30%" justifyContent="center" display="flex">
        Aloalo
      </Box>
    </Box>
  );
};

export default Home;
