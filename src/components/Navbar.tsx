import { Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      paddingX={8}
      paddingY={2}
      gap={3}
    >
      <Link to="/home">
        <Button colorScheme={"blackAlpha"}>Home</Button>
      </Link>
      <Spacer />
      <Link to="/login">
        <Button colorScheme={"twitter"} variant="ghost" marginLeft={2}>
          Login
        </Button>
      </Link>
      <Link to="register">
        <Button colorScheme={"twitter"} marginLeft={2}>
          Sign Up
        </Button>
      </Link>
    </Flex>
  );
}

export default Navbar;
