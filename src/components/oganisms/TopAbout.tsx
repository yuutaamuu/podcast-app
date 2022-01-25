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
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent p={8}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>title</FormLabel>
                <Input placeholder="タイトルを入力" />
              </FormControl>
              <FormControl>
                <FormLabel>comment</FormLabel>
                <Input placeholder="コメントを入力" />
              </FormControl>
              <Button>登録</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
});
