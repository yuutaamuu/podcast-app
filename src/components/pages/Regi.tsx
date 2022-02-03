import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { memo } from "react";
import { ModalNew } from "../oganisms/ModalNew";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Regi = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HeaderLayout />
      <Container maxW="container.lg" m="auto">
        <Box p={6}>
          <Heading as="h2" mb={4}>
            Register
          </Heading>
          <Box>
            <Text>
              気になった番組、番組を聴いて感じたことをメモしましょう。
              <br />
              登録は下記のボタンをクリックしてください。
            </Text>
          </Box>
          <Center p={8}>
            <Button onClick={onOpen}>新規登録</Button>
          </Center>
          <ModalNew isOpen={isOpen} onClose={onClose} />
        </Box>
      </Container>
    </>
  );
});
