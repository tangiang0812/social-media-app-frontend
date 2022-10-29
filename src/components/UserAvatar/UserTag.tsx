import { Avatar, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const UserTag = () => {
  return (
    <Flex alignItems="center"  flexDir="row" width="100%">
      <Flex flexDir="row" gap="2">
        <Avatar />
        <Flex flexDir="column">
          <Text as="b">Giang</Text>
          <Text>Hello may cung!</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Button>View user</Button>
    </Flex>
  );
};

export default UserTag;
