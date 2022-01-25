import { Box, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";

export const TopAbout = memo(() => {
  return (
    <Box p={6}>
      <Heading as="h2" mb={4}>
        About
      </Heading>
      <Box>
        <Text>自分が聞いたpodcastのメモを取りましょう。</Text>
      </Box>
    </Box>
  );
});
