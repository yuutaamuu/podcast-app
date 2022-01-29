import { useCallback, useState } from "react";
// import { useGetData } from "./useGetData";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

type Props = {
  id: number;
  latestData: Array<Data>;
};

export const useGetModal = () => {
  const [modalData, setModalData] = useState<Data>();

  const getData = useCallback((props: Props) => {
    const { id, latestData } = props;
    const targetData = latestData.find((data) => data.id === id);
    setModalData(targetData);
  }, []);

  return { modalData, getData };
};
