import { Button, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler, useState } from "react";

const PostFooter = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike: MouseEventHandler<HTMLButtonElement> = (): void => {
    setLiked(!liked);
  };

  const handleShare: MouseEventHandler<HTMLButtonElement> = (): void => {
    console.log("Post shared");
  };

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      padding={3}
      gap={2}
      borderTopWidth={1}
    >
      <Button variant="ghost" colorScheme="twitter" onClick={handleLike}>
        <FontAwesomeIcon
          icon={[liked ? "fas" : "far", "thumbs-up"]}
          size="xl"
        ></FontAwesomeIcon>
      </Button>
      <Spacer />
      <Button variant="ghost" onClick={handleShare}>
        <FontAwesomeIcon
          icon={["fas", "share-from-square"]}
          size="xl"
        ></FontAwesomeIcon>
      </Button>
    </Flex>
  );
};

export default PostFooter;
