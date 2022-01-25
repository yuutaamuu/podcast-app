import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalCard: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent px={10} py={16}>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Image
              m="auto"
              w="100%"
              h="250px"
              borderRadius="lg"
              src="https://source.unsplash.com/random"
            />
            <Text fontSize="2xl">title</Text>
            <Text>commentcommentcomment</Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
