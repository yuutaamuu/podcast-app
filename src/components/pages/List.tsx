import { Container, Text } from "@chakra-ui/react";
import { memo } from "react";
import { TopCardArea } from "../oganisms/TopCardArea";
import { HeaderLayout } from "../templates/HeaderLayout";

export const List = memo(() => {
  return (
    <>
      <HeaderLayout />
      <Container maxW="container.lg" m="auto">
        <TopCardArea />
      </Container>
    </>
  );
});
