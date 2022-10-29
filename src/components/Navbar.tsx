import { Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      padding={2}
      gap={3}
      borderWidth={5}
    >
      <Button colorScheme={"blackAlpha"}>
        <Link to="/home">Home</Link>
      </Button>
      <Spacer />
      <Button colorScheme={"twitter"} variant="ghost" marginLeft={2}>
        <Link to="/login">Login</Link>
      </Button>
      <Button colorScheme={"twitter"} marginLeft={2}>
        <Link to="register">Sign Up</Link>
      </Button>
    </Flex>
  );
}

export default Navbar;
