import { Box, Container } from "@chakra-ui/react";
import React from "react";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

interface PostProps {
}

const Post: React.FC<PostProps> = () => {
  return (
    <Container maxWidth="60%">
      <Box borderWidth={1} borderRadius={10}>
        <PostHeader></PostHeader>
        <PostContent></PostContent>
        <PostFooter></PostFooter>
      </Box>
    </Container>
  );
};

export default Post;
