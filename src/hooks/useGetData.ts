import { useContext } from "react";
import { DataContext, Datatype } from "../store/storeProvider";

export const useGetData = (): Datatype => useContext(DataContext);
