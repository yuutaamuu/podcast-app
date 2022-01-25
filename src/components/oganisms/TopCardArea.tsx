import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo } from "react";
import { Card } from "../molecules/Card";
import { ModalCard } from "../oganisms/ModalCard";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

export const TopCardArea = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const datas: Data[] = [
    {
      id: 1,
      img: "https://source.unsplash.com/random",
      title: "タイトル1です。",
      comment: "ああああああああ"
    },
    {
      id: 2,
      img: "https://source.unsplash.com/random",
      title: "タイトル2です。",
      comment: "いいいいいいい"
    },
    {
      id: 3,
      img: "https://source.unsplash.com/random",
      title: "タイトル3です。",
      comment: "うううううう"
    },
    {
      id: 4,
      img: "https://source.unsplash.com/random",
      title: "タイトル4です。",
      comment: "うううううう"
    }
  ];
  return (
    <Box p={6}>
      <Heading as="h2" mb={4}>
        List
      </Heading>
      <Flex flexWrap="wrap" justify="space-around">
        {datas.map((data) => (
          <Card
            onOpen={onOpen}
            key={data.id}
            img={data.img}
            title={data.title}
          />
        ))}
      </Flex>
      <ModalCard isOpen={isOpen} onClose={onClose} />
    </Box>
  );
});
