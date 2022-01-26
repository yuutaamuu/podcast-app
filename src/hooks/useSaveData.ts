import { useCallback, useState } from "react";

type Data = {
  // id: number;
  // img: string;
  title: string;
  comment: string;
};

export const useSaveData = () => {
  const [newData, setNewData] = useState<Data>({ title: "", comment: "" });

  const saveData = useCallback((props: Data) => {
    const { title, comment } = props;
    let data = { title, comment };
    setNewData(data);
  }, []);
  return { newData, saveData };
};
