import {
  Box,
  Button,
  Center,
  Heading,
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
        <Text>
          気になるPodCastの番組や聴いたことをメモするアプリケーションです。
          <br />
          登録できるのは、番組のタイトル・コメント・イメージ画像となっています。PodCastを生活の一部にして楽しみましょう。
        </Text>
      </Box>
      <Center p={8}>
        <Button onClick={onOpen}>新規登録</Button>
      </Center>
      <ModalNew isOpen={isOpen} onClose={onClose} />
    </Box>
  );
});
