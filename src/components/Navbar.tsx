import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserSettings from "./UserAvatar/UserSettings";

function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <Box
      position="sticky"
      top={0}
      backgroundColor="white"
      zIndex={1}
      boxShadow="lg"
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        paddingX={8}
        paddingY={3}
        gap={3}
      >
        <Link to="/home">
          <Button variant="ghost" colorScheme="twitter">
            <FontAwesomeIcon icon={["fas", "kiwi-bird"]} size="xl" />
          </Button>
        </Link>
        <Spacer />
        {location.pathname === "/login" || location.pathname === "/register" || location.pathname == "/" ? (
          <>
            <Link to="/login">
              <Button colorScheme={"twitter"} variant="ghost">
                Login
              </Button>
            </Link>
            <Link to="register">
              <Button colorScheme={"twitter"}>Sign Up</Button>
            </Link>
          </>
        ) : (
          <UserSettings />
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
