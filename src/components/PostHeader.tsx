import { Flex, Spacer } from "@chakra-ui/react";
import PostOption from "./PostOption";
import UserAvatar from "./UserAvatar/UserAvatar";

const PostHeader = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      padding={3}
      gap={2}
      borderBottomWidth={2}
    >
      <UserAvatar />
      <Spacer />
      <PostOption />
    </Flex>
  );
};

export default PostHeader;
