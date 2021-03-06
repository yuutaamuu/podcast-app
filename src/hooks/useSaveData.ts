import { useCallback, useState } from "react";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

export const useSaveData = () => {
  const [newData, setNewData] = useState<Data>({
    id: 0,
    img: "",
    title: "",
    comment: ""
  });

  const saveData = useCallback((props: Data) => {
    const { id, img, title, comment } = props;
    const data = {
      id: id,
      img: img,
      title: title,
      comment: comment
    };
    // let data = { title, comment };
    setNewData(data);
  }, []);
  return { newData, saveData };
};
