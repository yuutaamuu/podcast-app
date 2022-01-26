import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState, VFC } from "react";

import { useSaveData } from "../../hooks/useSaveData";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Store = {
  title: string;
  comment: string;
};

export const ModalNew: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const [title, setInputTitle] = useState<string>("");
  const [comment, setInputComment] = useState<string>("");

  const [dataStore, setDataStore] = useState<Array<Store>>([]);

  const { newData, saveData } = useSaveData();

  const handleChangeTit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    []
  );

  const handleChangeCom: React.ChangeEventHandler<HTMLDivElement> = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputComment(e.target.value);
    },
    []
  );

  const onClickSaveData = useCallback((title: string, comment: string) => {
    saveData({ title, comment });

    setInputTitle("");
    setInputComment("");
  }, []);

  useEffect(() => {
    const latestData = [...dataStore, newData];
    setDataStore(latestData);
    // console.log(latestData);
  }, [newData]);

  console.log(dataStore);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent p={8}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>title</FormLabel>
              <Input
                placeholder="タイトルを入力"
                value={title}
                onChange={handleChangeTit}
              />
            </FormControl>
            <FormControl>
              <FormLabel>comment</FormLabel>
              <Input
                placeholder="コメントを入力"
                value={comment}
                onChange={handleChangeCom}
              />
            </FormControl>
            <Button onClick={() => onClickSaveData(title, comment)}>
              登録
            </Button>
            <Text>{newData?.title}</Text>
            <Text>{newData?.comment}</Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});