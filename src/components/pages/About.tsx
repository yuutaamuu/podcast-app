import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const About = memo(() => {
  return (
    <>
      <HeaderLayout />
      <Container maxW="container.lg" m="auto">
        <Box p={6}>
          <Heading as="h2" mb={4}>
            About
          </Heading>
          <Text>
            気になるPodCastの番組や聴いたことをメモするアプリケーションです。
            <br />
            登録できるのは、番組のタイトル・コメント・イメージ画像となっています。PodCastを生活の一部にして楽しみましょう。
          </Text>
        </Box>
      </Container>
    </>
  );
});
