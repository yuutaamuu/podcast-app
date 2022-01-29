import {
  createContext,
  useState,
  useContext,
  VFC,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

export type Datatype = {
  latestData: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
};

type Props = {
  children: ReactNode;
};

// const initialState: Data[] = [
//   {
//     img: "https://source.unsplash.com/random",
//     title: "タイトル1です。",
//     comment: "ああああああああ"
//   },
//   {
//     img: "https://source.unsplash.com/random",
//     title: "タイトル2です。",
//     comment: "いいいいいいい"
//   },
//   {
//     img: "https://source.unsplash.com/random",
//     title: "タイトル3です。",
//     comment: "うううううう"
//   }
// ];

export const DataContext = createContext<Datatype>(null as Datatype);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [latestData, setData] = useState<Array<Data>>([
    // {
    //   id: 1,
    //   img: "https://source.unsplash.com/random",
    //   title: "タイトル30です。",
    //   comment: "ああああああああ"
    // },
    // {
    //   id: 2,
    //   img: "https://source.unsplash.com/random",
    //   title: "タイトル31です。",
    //   comment: "いいいいいいい"
    // },
    // {
    //   id: 3,
    //   img: "https://source.unsplash.com/random",
    //   title: "タイトル32です。",
    //   comment: "うううううう"
    // }
  ]);

  return (
    <DataContext.Provider value={{ latestData, setData }}>
      {children}
    </DataContext.Provider>
  );
};
