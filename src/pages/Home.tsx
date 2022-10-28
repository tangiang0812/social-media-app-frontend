import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";
import Post from "../components/Post";

const Home: React.FC = () => {
  return (
    <Container
      paddingY={5}
      justifyContent="space-around"
      height="92.5vh"
      maxWidth="100%"
      display="flex"
      flexDir="row"
    >
      <Container maxWidth="65%" display="flex" flexDir="column">
        <VStack spacing={5}>
          <Post />
          <Post />
        </VStack>
      </Container>
      <Container maxWidth="35%" justifyContent="center" display="flex">
        Aloalo
      </Container>
    </Container>
  );
};

export default Home;
