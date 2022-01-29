import { createStore } from "redux";

type Data = {
  id: number;
  img: string;
  title: string;
  comment: string;
};

const initialState: Data[] = [
  {
    id: 1,
    img: "https://source.unsplash.com/random",
    title: "タイトル1です。",
    comment: "ああああああああ"
  },
  {
    id: 2,
    img: "https://source.unsplash.com/random",
    title: "タイトル2です。",
    comment: "いいいいいいい"
  },
  {
    id: 3,
    img: "https://source.unsplash.com/random",
    title: "タイトル3です。",
    comment: "うううううう"
  }
];

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
