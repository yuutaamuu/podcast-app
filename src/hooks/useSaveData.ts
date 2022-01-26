import { useCallback, useState } from "react";

type Data = {
  // id: number;
  // img: string;
  title: string;
  comment: string;
};

export const useSaveData = () => {
  const [newData, setNewData] = useState<Data | undefined>();

  const saveData = useCallback((title: string, comment: string) => {
    let data: Data = { title: title, comment: comment };
    setNewData(data);
  }, []);

  return { newData, saveData };
};
