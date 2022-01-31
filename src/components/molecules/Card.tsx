import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Data = {
  id: number;
  img: string;
  title: string;
  onClickModal: (id: number) => void;
};

export const Card: VFC<Data> = memo((props) => {
  const { id, img, title, onClickModal } = props;

  return (
    <Box
      w={{ base: "100%", sm: "45%", md: "30%" }}
      height="400px"
      border="1px solid gray"
      py={8}
      borderRadius="16px"
      boxShadow="lg"
      mt={4}
    >
      <Stack spacing={8} align="center">
        <Image w="200px" h="200px" borderRadius="full" src={img} />
        <Text>{title}</Text>
        <Button
          onClick={() => onClickModal(id)}
          w="50%"
          bg="teal"
          color="white"
        >
          詳しく見る
        </Button>
      </Stack>
    </Box>
  );
});
