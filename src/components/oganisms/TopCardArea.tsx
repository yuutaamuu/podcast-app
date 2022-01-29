import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { Card } from "../molecules/Card";
import { ModalCard } from "../oganisms/ModalCard";
import { useGetModal } from "../../hooks/useGetModal";
import store from "../../store/store";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

export const TopCardArea: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { modalData, getData } = useGetModal();

  const datas: Data[] = store.getState();

  // const datas: Data[] = [
  //   {
  //     id: 1,
  //     img: "https://source.unsplash.com/random",
  //     title: "タイトル1です。",
  //     comment: "ああああああああ"
  //   },
  //   {
  //     id: 2,
  //     img: "https://source.unsplash.com/random",
  //     title: "タイトル2です。",
  //     comment: "いいいいいいい"
  //   },
  //   {
  //     id: 3,
  //     img: "https://source.unsplash.com/random",
  //     title: "タイトル3です。",
  //     comment: "うううううう"
  //   },
  //   {
  //     id: 4,
  //     img: "https://source.unsplash.com/random",
  //     title: "タイトル4です。",
  //     comment: "うううううう"
  //   }
  // ];

  const onClickModal = useCallback((id: number) => {
    getData({ id, datas });
    onOpen();
  }, []);

  return (
    <Box p={6}>
      <Heading as="h2" mb={4}>
        List
      </Heading>
      <Flex flexWrap="wrap" justify="space-around">
        {datas.map((data) => (
          <Card
            onClickModal={onClickModal}
            key={data.id}
            id={data.id}
            img={data.img}
            title={data.title}
          />
        ))}
      </Flex>
      <ModalCard
        title={modalData?.title}
        comment={modalData?.comment}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
});
