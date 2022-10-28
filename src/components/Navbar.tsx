import { Box, Button, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      w="100%"
      justifyContent={"space-between"}
      display="flex"
      p="5px 10px"
      alignItems="center"
      background="white"
      borderWidth="5px"
    >
      <Button colorScheme={"blackAlpha"}>
        <Link href="/">Home</Link>
      </Button>
      <div>
        <Button colorScheme={"cyan"} variant="ghost" marginLeft={2}>
          <Link href="/login">Login</Link>
        </Button>
        <Button colorScheme={"cyan"} marginLeft={2}>
          <Link href="register">Sign Up</Link>
        </Button>
      </div>
    </Box>
  );
}

export default Navbar;
