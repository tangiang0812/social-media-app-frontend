import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import UserAvatar from "./UserAvatar/UserAvatar";

const CreatePostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button width="100%" borderRadius={20} onClick={onOpen}>
        What's on your mind?
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={15}>
          <ModalHeader>
            <UserAvatar />
          </ModalHeader>
          <ModalCloseButton borderRadius={20} />
          <ModalBody>
            <Textarea variant="filled" borderRadius={15} placeholder="What's on your mind?"></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="twitter" borderRadius={15} width="100%" onClick={onClose}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePostModal;
