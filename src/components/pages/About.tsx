import { Container, Text } from "@chakra-ui/react";
import { memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const About = memo(() => {
  return (
    <>
      <HeaderLayout />
      <Container maxW="container.lg" m="auto">
        <Text>Aboutページです。</Text>
      </Container>
    </>
  );
});
