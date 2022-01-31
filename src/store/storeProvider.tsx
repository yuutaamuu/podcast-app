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

export const DataContext = createContext<Datatype>(null as Datatype);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [latestData, setData] = useState<Array<Data>>([]);

  return (
    <DataContext.Provider value={{ latestData, setData }}>
      {children}
    </DataContext.Provider>
  );
};
