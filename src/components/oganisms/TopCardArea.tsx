import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { Card } from "../molecules/Card";
import { ModalCard } from "../oganisms/ModalCard";
import { useGetModal } from "../../hooks/useGetModal";
// import store from "../../store/store";
import { useGetData } from "../../hooks/useGetData";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

export const TopCardArea: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { modalData, getData } = useGetModal();
  const { latestData } = useGetData();

  const onClickModal = useCallback(
    (id: number) => {
      getData({ id, latestData });
      onOpen();
    },
    [getData, latestData, onOpen]
  );

  return (
    <Box p={6}>
      <Heading as="h2" mb={4}>
        List
      </Heading>
      <Flex flexWrap="wrap" justify="space-around">
        {latestData.map((data) => (
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
