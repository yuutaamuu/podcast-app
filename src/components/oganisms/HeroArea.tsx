import { Box, Image } from "@chakra-ui/react";
import { memo } from "react";
import HeroImage from "../../../public/undraw_Podcast_re_wr88.png";

export const HeroArea = memo(() => {
  return (
    <Box w="100%">
      <Image w="40%" h="auto" mx="auto" my={8} src={HeroImage} />
    </Box>
  );
});
