import { Button, Flex, Link, Spacer } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" padding={2} gap={3} borderWidth={5}>
      <Button colorScheme={"blackAlpha"}>
        <Link href="/">Home</Link>
      </Button>
      <Spacer />
      <Button colorScheme={"twitter"} variant="ghost" marginLeft={2}>
        <Link href="/login">Login</Link>
      </Button>
      <Button colorScheme={"twitter"} marginLeft={2}>
        <Link href="register">Sign Up</Link>
      </Button>
    </Flex>
  );
}

export default Navbar;
