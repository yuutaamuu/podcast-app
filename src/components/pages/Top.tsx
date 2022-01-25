import { memo } from "react";
import { HeroArea } from "../oganisms/HeroArea";
import { HeaderLayout } from "../templates/HeaderLayout";
import { TopAbout } from "../oganisms/TopAbout";
import { TopCardArea } from "../oganisms/TopCardArea";
import { Container } from "@chakra-ui/react";

export const Top = memo(() => {
  return (
    <>
      <HeaderLayout />
      <Container maxW="container.lg" m="auto">
        <HeroArea />
        <TopAbout />
        <TopCardArea />
      </Container>
    </>
  );
});
