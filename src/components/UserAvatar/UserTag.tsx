import { Avatar, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const UserTag = () => {
  return (
    <Flex borderBottomWidth={2}  paddingBottom={3} alignItems="center"  flexDir="row" width="100%">
      <Flex flexDir="row" gap="2">
        <Avatar />
        <Flex flexDir="column">
          <Text as="b">Giang</Text>
          <Text>Hello may cung!</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Link to="/profile">
      <Button>View user</Button>
      </Link>
    </Flex>
  );
};

export default UserTag;
