import { Box } from "@chakra-ui/react";
import React from "react";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

interface PostProps {}

const Post: React.FC<PostProps> = () => {
  return (
    <Box
      width="680px"
      backgroundColor="white"
      borderWidth={1}
      borderRadius={15}
    >
      <PostHeader></PostHeader>
      <PostContent></PostContent>
      <PostFooter></PostFooter>
    </Box>
  );
};

export default Post;
