import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Data = {
  img: string;
  title: string;
  onOpen: () => void;
};

export const Card: VFC<Data> = memo((props) => {
  const { img, title, onOpen } = props;
  return (
    <Box
      w={{ base: "45%", md: "30%" }}
      height="400px"
      border="1px solid gray"
      align="center"
      py={8}
      borderRadius="16px"
      boxShadow="lg"
      mt={4}
    >
      <Stack spacing={8}>
        <Image w="200px" height="200px" borderRadius="full" src={img} />
        <Text>{title}</Text>
        <Button onClick={onOpen} w="50%" bg="teal" color="white">
          詳しく見る
        </Button>
      </Stack>
    </Box>
  );
});
