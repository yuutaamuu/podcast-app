import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { memo } from "react";

import { ModalNew } from "./ModalNew";

export const TopAbout = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={6}>
      <Heading as="h2" mb={4}>
        About
      </Heading>
      <Box>
        <Text>自分が聞いたpodcastのメモを取りましょう。</Text>
      </Box>
      <Center p={8}>
        <Button onClick={onOpen}>新規登録</Button>
      </Center>
      <ModalNew isOpen={isOpen} onClose={onClose} />
    </Box>
  );
});
