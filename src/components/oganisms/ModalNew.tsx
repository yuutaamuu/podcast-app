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
import { memo, useCallback, useEffect, useRef, useState, VFC } from "react";

import { useSaveData } from "../../hooks/useSaveData";
import store from "../../store/store";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Store = {
  // id: number;
  img: string;
  title: string;
  comment: string;
};

export const ModalNew: VFC<Props> = memo((props) => {
  const renderFlgRef = useRef(false);
  const { isOpen, onClose } = props;
  const [title, setInputTitle] = useState<string>("");
  const [comment, setInputComment] = useState<string>("");
  // const [id, setArrId] = useState<number>(0);
  const [img, setArrImg] = useState<string>(
    "https://source.unsplash.com/random"
  );

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

  const onClickSaveData = useCallback(
    ({ img, title, comment }) => {
      // console.log(title);
      saveData({ img, title, comment });
      setInputTitle("");
      setInputComment("");
    },
    [saveData]
  );

  useEffect(() => {
    if (renderFlgRef.current) {
      if (!dataStore) {
        const newStore = [newData];
        setDataStore(newStore);
        dispatch(store.getState() === newStore);
      } else {
        const newStore = [...dataStore, newData];
        setDataStore(newStore);
      }
    } else {
      renderFlgRef.current = true;
    }
  }, [onClickSaveData, newData]);

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
            <Button onClick={() => onClickSaveData({ img, title, comment })}>
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
