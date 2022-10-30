import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import UserTag from "./UserAvatar/UserTag";

const Suggestion = () => {
  return (
    <Box width="400px" position="relative">
      <Box
        backgroundColor="white"
        width="400px"
        borderWidth={1}
        borderRadius={15}
        display="flex"
        flexDir="column"
        position="fixed"
        boxShadow="lg"
      >
        <Text
          borderTopRadius={15}
          backgroundColor="gray.100"
          fontSize="2xl"
          as="b"
          padding={3}
        >
          Users You Can Follow
        </Text>
        <VStack spacing={4} margin={4}>
          <UserTag />
          <UserTag />
          <UserTag />
          <UserTag />
        </VStack>
      </Box>
    </Box>
  );
};

export default Suggestion;
