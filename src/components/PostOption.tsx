import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";

const PostOption = () => {
  const handleClickOptions: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Giang");
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" onClick={handleClickOptions}>
          <FontAwesomeIcon icon={["fas", "ellipsis"]} size="xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing={2}>
          <Button width="100%" variant="ghost">Hide post</Button>
          <Button width="100%" variant="ghost">Delete post</Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PostOption;
