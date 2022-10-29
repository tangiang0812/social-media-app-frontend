import { Box } from "@chakra-ui/react";
import React from "react";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

interface PostProps {}

const Post: React.FC<PostProps> = () => {
  return (
    <Box width="680px">
      <Box borderWidth={1} borderRadius={10}>
        <PostHeader></PostHeader>
        <PostContent></PostContent>
        <PostFooter></PostFooter>
      </Box>
    </Box>
  );
};

export default Post;
