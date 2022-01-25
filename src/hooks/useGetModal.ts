import { useCallback, useState } from "react";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

type Props = {
  id: number;
  datas: Array<Data>;
};

export const useGetModal = () => {
  const [modalData, setModalData] = useState<Data | null>();

  const getData = useCallback((props: Props) => {
    const { id, datas } = props;
    const targetData = datas.find((data) => data.id === id);
    setModalData(targetData);
  }, []);

  return { modalData, getData };
};
