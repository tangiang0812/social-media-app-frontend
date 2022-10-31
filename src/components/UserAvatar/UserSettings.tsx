import {
  Avatar,
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const UserSettings = () => {
  const handleClickOptions: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Giang");
    console.log(window.location.pathname);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          role="button"
          tabIndex={0}
          onClick={handleClickOptions}
          size="md"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing={2}>
            <Button variant="ghost">
              Settings
            </Button>
            <Link to="/login">
              <Button variant="ghost">
                Logout
              </Button>
            </Link>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserSettings;
