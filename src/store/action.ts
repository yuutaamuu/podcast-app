import { ADD_TODO } from "./addDate";

type Data = {
  // id: number;
  img: string;
  title: string;
  comment: string;
};

export const addData = (content: Data[]) => ({
  type: ADD_TODO,
  payload: {
    content
  }
});
