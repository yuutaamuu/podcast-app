import { ChakraProvider, Text } from "@chakra-ui/react";
import "./styles.css";

import { Top } from "./components/pages/Top";
import store from "./store/store";

export default function App() {
  console.log(store.getState());
  return (
    <ChakraProvider>
      <Top />
    </ChakraProvider>
  );
}
