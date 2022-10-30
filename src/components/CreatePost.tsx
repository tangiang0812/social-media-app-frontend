import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import CreatePostModal from "./CreatePostModal";
import UserAvatar from "./UserAvatar/UserAvatar";

const CreatePost = () => {
  return (
    <Flex
      alignItems="center"
      boxShadow="lg"
      borderRadius={15}
      backgroundColor="white"
      padding={6}
      gap={4}
    >
      <UserAvatar />
      <CreatePostModal />
    </Flex>
  );
};

export default CreatePost;
